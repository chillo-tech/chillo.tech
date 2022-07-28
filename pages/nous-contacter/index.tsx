import Layout from '../../layouts/opened'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';
const schema = yup.object({
    id: yup.string(),
    message: yup.string()
          .required("Ce champ est requis"),
    firstName: yup.string()
          .required("Ce champ est requis"),
    lastName: yup.string()
          .required("Ce champ est requis"),
    email: yup.string()
          .required("Ce champ est requis")
          .email("Email invalide"),
    file: yup.string(),
    phone: yup.string()
          .required("Ce champ est requis")
          .min(10, "Téléphone invalide")
          .max(10, "Téléphone invalide"),
}).required();

function Contact() {
  const [messageSent, setMessageSent] = useState(false)
  const { register, handleSubmit: handleFormSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {id: '', message: '', firstName: '', lastName: '',  email: '', phone: '', file: ''}
  });
  const onSubmit = async (data) => {
    
    try {
      const response  = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain ',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...data, title: `Nouveau message de ${data.firstName} ${data.lastName}`})
      })
      await response.json();
      setMessageSent(true);
      reset();
      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    } catch (error) {
      console.error(error)
    }
  
  }
  return (
    <Layout>
      <section className='container mx-auto py-5'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-blue-900 font-extralight infos bg--900 py-6 px-4 flex flex-col justify-center">
            <h2 className='title from-slate-900 font-extrabold text-4xl'>
              Contactez nous
            </h2>
            <div className='my-5'>
              <p className='mb-5'>
                Une question pour l&apos;équipe ? Nous sommes là pour y répondre.
              </p>
              <p>
              Toutes les informations du formulaire 
                <ul className='list-disc ml-10'>
                  <li>Pour candidater</li>
                  <li>Recevoir des compléments d’information</li>
                  <li>Poser vos questions</li>
                  <li>Nous soumettre votre projet</li>
                  <li>Nous rencontrer</li>
                </ul>
              </p>
            </div>
            <p>
              Nous avons besoin de vos informations personnelles pour vous contacter au sujet de ses produits et services.
              <br/>Vous pouvez vous désabonner de ces communications à tout moment.
            </p>
         
          </div>
          <div className="infos bg-slate-200 py-3 rounded-md px-3 md:px-10">
         
          <form onSubmit={handleFormSubmit(onSubmit)}>
             <div className="text-lg">  
             <div className='text-center font-extralight'>
              <p className='mb-2 font-extrabold text-blue-900 text-2xl'>Nous sommes à votre écoute.</p>
              <p>
                Pour candidater, demander uneinformation, <br/> poser vos questions, nous soumettre votre projet.
              </p>
              {
              messageSent ? 
                <p className='text-center py-3 text-green-600'>
                  Merci de nous avoir contacté <br /> 
                  Nous avons bien reçu votre message <br />
                  Nous reviendrons vers vous assez vite.
                </p>
                : null
            }
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div className="mb-4">
                <label htmlFor="firstName" className="font-extralight form-label">Prénom</label>
                <div className="mt-1">
                  <input {...register("firstName")} type="text" id="firstName"  />
                </div>
                <p className='text-red-600'>{errors?.firstName?.message}</p>
              </div> 
              <div className="mb-4">
                <label htmlFor="lastName" className="font-extralight form-label">Nom</label>
                <div className="mt-1">
                  <input {...register("lastName")} type="text" id="lastName"  />
                </div>
                <p className='text-red-600'>{errors?.lastName?.message}</p>
              </div>
             </div>
              <div className="mb-4 text-lg">
                <label htmlFor="phone" className="font-extralight form-label mb-1">Téléphone</label>
                <div className="mt-1">
                  <input {...register("phone")} type="text" className="" id="phone" />
                </div>
                <p className='text-red-600'>{errors?.phone?.message}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="font-extralight form-label">E-mail</label>
                <div className="mt-1">
                  <input {...register("email")} type="email" id="email" />
                </div>
                <p className='text-red-600'>{errors?.email?.message}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="font-extralight form-label">Votre message</label>
                <div className="mt-1">
                  <textarea {...register("message")} id="message" />
                </div>
                <p className='text-red-600'>{errors?.message?.message}</p>
              </div>
              {/*
              <div className="mb-4">
                <label htmlFor="file" className="font-extralight form-label block text-center py-5 outline-slate-300 rounded-lg outline-dashed">
                  <p className='block'>Cliquez ici pour nous transmettre un fichier</p>
                  <p className='text-sm mt-4 text-orange-700'>Ce champ est optionnel</p>  
                </label>
                <div className="mt-1 hidden">
                  <input type="file" {...register("file")} id="file"/>
                </div>
              </div>
              */}
             
              <button type="submit" className="mt-2 w-full bg-blue-800 hover:bg-blue-800 text-white font-light py-2 px-4 rounded-lg shadow-sm col-span-2">
                Envoyer
              </button>
              <p className='text-center py-5 font-boldxz'>
                Nous ne traitons les données recueillies que pour faciliter la prise de contact.
              </p>
              </div> 
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact