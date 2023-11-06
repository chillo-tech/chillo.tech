import Layout from '@/layouts/opened';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { fetchData, patchData } from '@/services';
import Message from '@/components/Message';
import Metadata from '@/components/metadata';
import { EVALUATIONS, formation_liste } from '@/utils';
import RenderHtmlContent from '@/components/RenderHtmlContent';
import classNames from 'classnames';
import { AiFillCheckCircle } from 'react-icons/ai';
import { RadioGroup } from '@headlessui/react';
const schema = yup
  .object({
    texte: yup.string(),
    note: yup.string().required('Ce champ est requis'),
    email: yup.string().required('Ce champ est requis'),
  })
  .required();

function Contact({ index, sessionId }: any) {
  const [note, setNote] = useState<number>(0);
  const [nextSession, setNextSession] = useState<any>({});
  const [training, setTraining] = useState<any>();
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      texte: '',
      note: '',
      email: ''
    },
  });
  const mutation = useMutation({
    mutationFn: (message: any) =>
      patchData(`/api/backoffice/Session/${sessionId}`, {
        avis: { create: [{ ...message, status: 'published' }] },
      }),
  });

  const handleError = (error: any) => {
    error.preventDefault();
    router.push('/');
  };
  const onSubmit = async (data: any) => {
    mutation.mutate(data);
  };

  useQuery<any>({
    queryKey: ['menu', index],
    enabled: !!index,
    queryFn: () =>
      fetchData({
        path: `/api/backoffice/Formation/${index}`,
        fields: formation_liste,
      }),
    onSuccess: (data) => {
      setTraining(data.data.data);
      getNextSession(data.data.data);
    },
  });

  const getNextSession = (training: any) => {
    const sessions = training.sessions || [];
    if (sessions.length) {
      const nextSessions =
        sessions
          .sort(
            (a: any, b: any) =>
              new Date(a.Session_id.date_heure).getTime() -
              new Date(b.Session_id.date_heure).getTime()
          )
          .filter(
            (a: any) => new Date(a.Session_id.date_heure).getTime() - new Date().getTime() > 0
          ) || [];
      if (nextSessions.length) {
        setNextSession(nextSessions[0]);
      }
    } else {
      router.push('/page-inconnue')
    }
  };
  const updatNote = (value: number) => {
    setNote(value);
    setValue('note', `${value}`)
  };
  return (
    <>
      <Layout>
        <Metadata entry={training && training?.metadonnees && training?.metadonnees[0]} />
        <section className="container mx-auto py-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-blue-900 font-extralight infos bg--900 md:py-10 px-4 flex flex-col">
              {training ? (
                <>
                  <h2 className="title from-slate-900 font-extrabold text-2xl md:text-4xl">{training.titre}</h2>
                  
                  <RenderHtmlContent
                        classes="text-left text-xl font-light text mt-10 hidden md:block"
                        content={training.apres}
                      />
                </>
              ) : null}
            </div>
            <div className="infos bg-slate-200 py-3 rounded-md px-3 md:px-10">
              {mutation.isLoading ? (
                <Message
                  type="loading"
                  firstMessage="Un instant"
                  secondMessage="Nous enregistrons votre demande"
                />
              ) : null}
              {mutation.isError ? (
                <Message
                  type="error"
                  firstMessage="Une erreur est survenue, nous allons la résoudre sous peu"
                  secondMessage="N'hésitez pas à nous passer un coup de fil"
                  action={handleError}
                  actionLabel="Retourner à l'accueil"
                />
              ) : null}
              {mutation.isSuccess ? (
                <Message
                  type="success"
                  firstMessage="Nous avons reçu votre message."
                  secondMessage="Une réponse personnalisée vous sera apportée dans les meilleurs délais."
                  action={handleError}
                  actionLabel="Retourner à l'accueil"
                />
              ) : null}
              {mutation.isIdle ? (
                <form onSubmit={handleFormSubmit(onSubmit)}>
                  <div className="text-lg">
                    <div className="text-left mb-3 font-extralight">
                      <p className="mb-2 font-extrabold text-blue-900 text-2xl">
                        Merci de nous donner votre avis
                      </p>
                      <p>Les évaluations nous permmettent de constament nous améliorer</p>
                      <p>Globalement vous êtes ...</p>
                    </div>
                    <div className="mb-4">
                      <div className="mt-1 grid ">
                        <RadioGroup value={note} onChange={updatNote}>
                          <div className="space-y-2">
                            {EVALUATIONS.sort((a, b) => b.value - a.value).map(
                              ({ value, text }: any) => (
                                <RadioGroup.Option
                                  key={`evaul-${value}`}
                                  value={value}
                                  className={({ active, checked }) =>
                                    classNames(
                                      'relative flex cursor-pointer rounded-lg px-5 py-3 shadow-md focus:outline-none',
                                      {
                                        'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300':
                                          active,
                                        'text-white': checked,
                                        'bg-red-400': checked && note === 1,
                                        'bg-yellow-400': checked && note === 2,
                                        'bg-sky-400': checked && note === 3,
                                        'bg-blue-700': checked && note === 4,
                                        'bg-green-900': checked && note === 5,
                                        'bg-white': !checked,
                                      }
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center">
                                          <div className="text-normal">
                                            <RadioGroup.Label
                                              as="p"
                                              className={`font-semi  ${
                                                checked ? 'text-white' : 'text-gray-900'
                                              }`}
                                            >
                                              {text}
                                            </RadioGroup.Label>
                                          </div>
                                        </div>
                                        {checked && (
                                          <div className="shrink-0 text-white">
                                            <AiFillCheckCircle className="h-6 w-6" />
                                          </div>
                                        )}
                                      </div>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              )
                            )}
                          </div>
                        </RadioGroup>
                      </div>
                      <p className="text-red-600">{errors?.note?.message}</p>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="message" className="font-extralight form-label">
                        Votre message pour nous
                      </label>
                      <div className="mt-1">
                        <textarea {...register('texte')} id="message" rows={8} />
                      </div>
                      <p className="text-red-600">{errors?.texte?.message}</p>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="email" className="font-extralight form-label">
                        E-mail
                      </label>
                      <div className="mt-1">
                        <input {...register('email')} type="email" id="email" placeholder='Votre adresse email' />
                      </div>
                      <p className="text-red-600">{errors?.email?.message}</p>
                    </div>
                    <button
                      type="submit"
                      className="mt-2 w-full bg-blue-800 hover:bg-blue-800 text-white font-light py-2 px-4 rounded-lg shadow-sm col-span-2"
                    >
                      Envoyer
                    </button>
                    <p className="text-center py-5 font-boldxz">
                      Nous ne traitons les données recueillies que pour faciliter la prise de
                      contact.
                    </p>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { slug, session } = params;
  return {
    props: {
      ...params,
      index: slug.split('-')[0],
      sessionId: session.split('-')[0]
    },
  };
}
export default Contact;
