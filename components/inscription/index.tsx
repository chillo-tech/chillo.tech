import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';
const schema = yup.object({
    id: yup.string(),
    firstName: yup.string()
          .required("Ce champ est requis"),
    lastName: yup.string()
          .required("Ce champ est requis"),
    email: yup.string()
          .required("Ce champ est requis")
          .email("Email invalide"),
    phone: yup.string()
          .required("Ce champ est requis")
          .min(10, "Téléphone invalide")
          .max(10, "Téléphone invalide"),
}).required();

type params = {
  to: string,
  start: string,
  end: string
}
function Inscription({to, start, end}: params) {
  
  const [messageSent, setMessageSent] = useState(false);
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
        body: JSON.stringify({...data, message: to, title: `Nouvelle inscription de ${data.firstName} ${data.lastName}`})
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
    
         
    <form onSubmit={handleFormSubmit(onSubmit)} className="h-full">
        <div className="text-lg flex flex-col justify-between h-full">  
          <div className='text-center font-extralight'>
            <div>
              <h2 className='from-slate-900 font-extrabold text-2xl text-blue-900 mt-3'>Inscrivez vous</h2>
              <p className='mb-3 text-slate-700 text-extrabold'>
                Prochaine session <br />du 
                <span className="ml-1 font-bold">{start}</span>
                <span className="mx-1">au</span>
                <span className="font-bold">{end}</span>
              </p>
            </div>
              {
              messageSent ? 
                <p className='text-center py-3 text-green-700'>
                  Merci de nous avoir contacté <br /> 
                  Nous avons bien reçu votre message <br />
                  Nous reviendrons vers vous assez vite.
                </p>
                : null
            }
          </div>
          <div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="firstName" className="font-extralight form-label">Prénom</label>
              <div className="mt-1">
                <input {...register("firstName")} type="text" id="firstName"  />
              </div>
              <p className='text-red-600'>{errors?.firstName?.message}</p>
            </div> 
            <div>
              <label htmlFor="lastName" className="font-extralight form-label">Nom</label>
              <div className="mt-1">
                <input {...register("lastName")} type="text" id="lastName"  />
              </div>
              <p className='text-red-600'>{errors?.lastName?.message}</p>
            </div>
          </div>
            <div className="mb-1 text-lg">
              <label htmlFor="phone" className="font-extralight form-label mb-1">Téléphone</label>
              <div className="mt-1">
                <input {...register("phone")} type="text" className="" id="phone" />
              </div>
              <p className='text-red-600'>{errors?.phone?.message}</p>
            </div>
            <div>
              <label htmlFor="email" className="font-extralight form-label">E-mail</label>
              <div className="mt-1">
                <input {...register("email")} type="email" id="email" />
              </div>
              <p className='text-red-600'>{errors?.email?.message}</p>
            </div>
          
            <button type="submit" className="mt-2 w-full bg-blue-800 hover:bg-blue-800 text-white font-light py-2 px-4 rounded-lg shadow-sm col-span-2">
              Envoyer
            </button>
          </div>
          <p className='text-center font-bold'>
            Nous ne traitons les données recueillies que pour faciliter la prise de contact.
          </p>
        </div> 
      </form>
  )
}

export default Inscription