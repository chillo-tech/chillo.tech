import React, { useState } from 'react';
import Layout from '@/../layouts/opened';
import { NetworkShared, SigninButton, Tabs } from '@/../components';
import { dateFormat, formation, slugify } from '@/../utils';
import Inscription from '@/../components/inscription';
import { useQuery } from 'react-query';
import { fetchData } from '@/services';
import ImageDisplay from '@/components/image-display';
import RenderHtmlContent from '@/components/RenderHtmlContent';
import Metadata from '@/components/metadata';
import Debug from '@/components/Debug';

function TrainingInfos({ index }: any) {
  const [training, setTraining] = useState<any>();
  const [nextSession, setNextSession] = useState<any>({});
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
      setNextSession({});
    }
  };

  useQuery<any>({
    queryKey: ['menu', index],
    enabled: !!index,
    queryFn: () =>
      fetchData({
        path: `/api/backoffice/Formation/${index}`,
        fields: formation,
      }),
    onSuccess: (data) => {
      setTraining(data.data.data);
      getNextSession(data.data.data);
    },
  });
  return (
    <Layout>
      {training ? (
        <>
          <Metadata entry={training} />

          <section className="header bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-2 md:px-0">
            <div className="container mx-auto grid gap-4 md:grid-cols-3 items-stretch">
              <div className="description md:col-span-2 text-white flex flex-col justify-center">
                <h1 className="from-slate-900 font-extrabold text-3xl text-center md:text-left md:text-4xl">
                  {training.titre}
                </h1>
                {Object.keys(nextSession).length ? (
                  <>
                    <div className="mb-3 text-extrabold my-7 text-4xl text-center md:text-left">
                      <span className="text-2xl">{nextSession.Session_id.duree}</span>
                      <span className="mx-2 text-2xl">|</span>
                      <span className="text-2xl">{nextSession.Session_id.prix[0].libelle}</span>
                      <RenderHtmlContent
                        classes="text-left text-sm font-light text"
                        content={nextSession.Session_id.prix[0].description}
                      />
                    </div>
                  </>
                ) : (
                  <div className="mb-3 text-extrabold my-7 text-4xl text-center md:text-left">
                    <span className="text-2xl">{training.duree} heures</span>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <RenderHtmlContent content={training.prerequis} />
                  <ImageDisplay
                    imageClasses="object-cover overflow-hidden rounded-lg w-full h-full"
                    wrapperClasses="relative w-full h-60 object-cover overflow-hidden rounded-lg"
                    image={training.image}
                  />
                </div>
              </div>
              {Object.keys(nextSession).length ? (
                <div className="links text-2xl p-4 bg-slate-50 border-2 border-blue-700 rounded-lg flex flex-col justify-between">
                  <div className="text-2xl text-slate-700 text-extrabold text-center">
                    Prochaine session le
                    <p className="text-3xl ml-1 font-bold">
                      {dateFormat(nextSession?.Session_id.date_heure)}
                    </p>
                    <p>
                      <span className="text-3xl mx-1">Pendant</span>
                      <span className="text-3xl font-bold">{nextSession?.Session_id.duree}</span>
                    </p>
                    <RenderHtmlContent
                      classes="text-center text-xl my-6 !list-none"
                      content={nextSession?.Session_id.horaire_formation}
                    />
                    <p>
                      <span className="text-3xl mx-1">
                        La formation est {nextSession?.Session_id.type_formation}
                      </span>
                    </p>
                  </div>
                  <NetworkShared
                    path={`formations/${slugify(`${training.titre}-${training.id}`)}`}
                  />
                  <SigninButton label="Je m'inscris" link="#inscription" />
                </div>
              ) : (
                <div className="links text-2xl p-4 bg-slate-50 border-2 border-blue-700 rounded-lg flex flex-col justify-between">
                  <div className="text-md text-slate-700 text-extrabold text-center">
                    <p className="font-light text-base py-2">
                      Nous n&apos;avons pas encore de session pour cette formation.
                    </p>
                    <p className="font-light text-base py-2">
                      Contactez nous et pour avoir nos prochaines dates.
                    </p>
                  </div>
                  <SigninButton label="Nous contacter" link="/nous-contacter" />
                </div>
              )}
            </div>
          </section>
          <section className="bg-white pt-10">
            <div className="container mx-auto text-xl description">
              <Tabs
                links={[{ label: 'Description' }, { label: 'Programme' }, { label: 'Et après' }]}
              >
                <div>
                  <RenderHtmlContent content={training.description} />
                </div>
                <RenderHtmlContent content={training.programme} />
                <RenderHtmlContent content={training.apres} />
              </Tabs>
            </div>
          </section>
          {Object.keys(nextSession).length ? (
            <section className="container text-xl mx-auto training py-4">
              <div className="grid md:px-32 ">
                <div className="infos bg-slate-200 py-3 rounded-md px-3 md:px-10" id="inscription">
                  <Inscription training={training} session={nextSession} />
                </div>
              </div>
            </section>
          ) : null}
        </>
      ) : null}
    </Layout>
  );
}
export async function getServerSideProps(context: any) {
  const { params } = context;
  const { slug } = params;
  const parts = slug.split('-')
  return {
    props: {
      ...params,
      index: parts[parts.length - 1]
    },
  };
}
export default TrainingInfos;
