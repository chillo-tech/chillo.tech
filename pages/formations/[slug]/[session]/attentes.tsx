import Layout from "@/layouts/opened";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { fetchData, patchData } from "@/services";
import Message from "@/components/Message";
import Metadata from "@/components/metadata";
import { formation_liste } from "@/utils";
import RenderHtmlContent from "@/components/RenderHtmlContent";
import { axiosInstance } from "@/services/axios-instance";
const schema = yup
  .object({
    texte: yup.string().required("Ce champ est requis"),
    email: yup.string().required("Ce champ est requis").email("Email invalide"),
  })
  .required();

function Attente({ index }: any) {
  const [nextSession, setNextSession] = useState<any>({});
  const [training, setTraining] = useState<any>();
  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      texte: "",
      email: "",
    },
  });
  const mutation = useMutation({
    mutationFn: (message: any) =>
      patchData(`/api/backoffice/Session/${nextSession.id}`, {
        attentes: { create: [{ ...message, status: "published" }] },
      }),
  });

  const router = useRouter();
  const handleError = (error: any) => {
    error.preventDefault();
    router.push("/");
  };
  const onSubmit = async (data: any) => {
    mutation.mutate(data);
  };

  useQuery<any>({
    queryKey: ["menu", index],
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
    const sessions = training.Sessions || [];
    if (sessions.length) {
      const nextSessions =
        sessions
          .sort(
            (a: any, b: any) =>
              new Date(a.date_heure).getTime() -
              new Date(b.date_heure).getTime()
          )
          .filter(
            (a: any) =>
              new Date(a.date_heure).getTime() - new Date().getTime() > 0
          ) || [];
      if (nextSessions.length) {
        setNextSession(nextSessions[0]);
      }
    } else {
      setNextSession({});
    }
  };

  return (
    <>
      <Layout>
        <Metadata
          entry={training && training?.metadonnees && training?.metadonnees[0]}
        />
        <section className="container mx-auto py-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-blue-900 font-extralight infos bg--900 md:py-10 px-4 flex flex-col">
              {training ? (
                <>
                  <h2 className="title from-slate-900 font-extrabold text-2xl md:text-4xl">
                    {training.titre}
                  </h2>
                  {nextSession ? (
                    <div className="mb-3 text-extrabold md:my-7 text-4xl md:text-left">
                      <span className="text-2xl">{nextSession?.duree}</span>
                      <span className="mx-2 text-2xl">|</span>
                      <span className="text-2xl">
                        {Array.isArray(nextSession?.prix) &&
                          nextSession?.prix.length &&
                          nextSession?.prix[0]?.ConceptPrix_id?.libelle}
                      </span>
                      <RenderHtmlContent
                        classes="text-left text-sm font-light text"
                        content={
                          Array.isArray(nextSession?.prix) &&
                          nextSession?.prix[0].ConceptPrix_id?.description
                        }
                      />
                    </div>
                  ) : null}
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
                  <div className="md:text-lg">
                    <div className="text-left mb-3 font-extralight">
                      <p className="mb-2 font-extrabold text-blue-900 text-2xl">
                        Quelles sont vos attentes pour cette formation
                      </p>
                      <p>
                        Nous voulons que cette formation vous soit bénéfique.
                      </p>
                      <p>
                        En quelques mots quelles sont vos attentes pour cette
                        formation
                      </p>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="font-extralight form-label"
                      >
                        E-mail
                      </label>
                      <div className="mt-1">
                        <input {...register("email")} type="email" id="email" />
                      </div>
                      <p className="text-red-600">{errors?.email?.message}</p>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="font-extralight form-label"
                      >
                        Vos attentes
                      </label>
                      <div className="mt-1">
                        <textarea
                          {...register("texte")}
                          id="message"
                          rows={8}
                        />
                      </div>
                      <p className="text-red-600">{errors?.texte?.message}</p>
                    </div>
                    <button
                      type="submit"
                      className="mt-2 w-full bg-blue-800 hover:bg-blue-800 text-white font-light py-2 px-4 rounded-lg shadow-sm col-span-2"
                    >
                      Envoyer
                    </button>
                    <p className="text-center py-5 font-boldxz">
                      Nous ne traitons les données recueillies que pour
                      faciliter la prise de contact.
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
  const { params, res } = context;
  const { slug, session } = params;

  const slugparts = slug.split("-");
  try {
    const formationResponse = await axiosInstance.get(
      `/api/backoffice/Formation/${slugparts.at(-1)}/?fields=*,Sessions.*`
    );

    const formation = formationResponse.data.data;

    if (!formation || formation.slug !== slug) {
      res.writeHead(302, { Location: "/not-found" });
      res.end();
      return { props: {} };
    }

    const foundedSession = formation.Sessions.find(
      (sess: any) => sess.slug === session
    );

    if (!foundedSession) {
      res.writeHead(302, { Location: "/not-found" });
      res.end();
      return { props: {} };
    }

    return {
      props: {
        ...params,
        index: slugparts[slugparts.length - 1],
      },
    };
  } catch (error) {
    console.log("error", error);
    res.writeHead(302, { Location: "/not-found" });
    res.end();
    return { props: {} };
  }
}
export default Attente;
