import React, { useEffect, useState } from 'react';
import Layout from '@/../layouts/opened';
import ReactMarkdown from 'react-markdown';
import { NetworkShared, SigninButton, Tabs } from '@/../components';
import { dateFormat, slugify } from '@/../utils';
import Inscription from '@/../components/inscription';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchData } from '@/services';

function TrainingInfos({ index }: any) {
  const router = useRouter();
  const [training, setTraining] = useState<any>();
  const [nextSession, setNextSession] = useState({});
  const getNextSession = (training: any) => {
    const sessions = training.sessions || [];
    if (sessions.length) {
      const nextSessions =
        sessions
          .sort(
            (a: any, b: any) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          )
          .filter((a: any) => new Date(a.startDate).getTime() - new Date().getTime() > 0) || [];
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
        fields: '*,*.*',
      }),
    onSuccess: (data) => {
      setTraining(data.data.data);
    },
  });
  return (
    <Layout>
      {training ? (
        <>
          <Head>
            <title>CHILLO SERVICES | {training.title}</title>
            <meta property="og:title" content={`CHILLO SERVICES - ${training.title}`} />
            <meta name="description" content={training.abstract} />
            <meta name="og:description" content={training.abstract} />
          </Head>
          <section className="header bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-2 md:px-0">
            <div className="container mx-auto grid gap-4 md:grid-cols-3 items-stretch">
              <div className="description p-4 md:col-span-2 text-white flex flex-col justify-center">
                <h1 className="from-slate-900 font-extrabold text-3xl text-center md:text-left md:text-4xl">
                  {training.title}
                </h1>
                <p className="mb-3 text-extrabold my-7 text-4xl text-center md:text-left">
                  <span className="text-2xl">{training.duration}</span>
                  <span className="mx-2 text-2xl">|</span>
                  <span className="text-2xl">{training.price}</span>
                </p>
                <div className="flex flex-row justify-center md:justify-start">
                  {training?.image
                    ?.slice(0)
                    .reverse()
                    .map((item:any, index: number) => (
                      <div key={`image-${index}`} className="mr-5 formations">
                        <picture className="flex justify-center" key={`reference-${index}`}>
                          <source
                            srcSet={`${process.env.BACKOFFICE_URL}${item.url}`}
                            type="image/webp"
                          />
                          <img
                            src={`${process.env.BACKOFFICE_URL}${item.url}`}
                            alt={`${item.alternativeText}`}
                            className="image"
                          />
                        </picture>
                      </div>
                    ))}
                </div>
              </div>
              {Object.keys(nextSession).length ? (
                <div className="links text-2xl p-4 bg-slate-50 border-2 border-blue-700 rounded-lg flex flex-col justify-between">
                  <p className="text-2xl text-slate-700 text-extrabold text-center">
                    Prochaine session <br />
                    du
                    <span className="text-3xl ml-1 font-bold">
                      {dateFormat(nextSession.startDate)}
                    </span>
                    <span className="text-3xl mx-1">au</span>
                    <span className="text-3xl font-bold">{dateFormat(nextSession.endDate)}</span>
                  </p>
                  <NetworkShared
                    path={`formations/${slugify(`${training.title}-${training.id}`)}`}
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
                  <ReactMarkdown className="mb-4 text-2xl font-extralight">
                    {training.abstract}
                  </ReactMarkdown>
                  <ReactMarkdown className="mb-4 text-2xl font-extralight">
                    {training.description}
                  </ReactMarkdown>
                </div>
                <ReactMarkdown>{training.program}</ReactMarkdown>
                <ReactMarkdown>{training.next}</ReactMarkdown>
              </Tabs>
            </div>
          </section>
          {Object.keys(nextSession).length ? (
            <section className="container text-xl mx-auto training py-4">
              <div className="grid md:px-32 ">
                <div className="infos bg-slate-200 py-3 rounded-md px-3 md:px-10" id="inscription">
                  
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
  const { category } = params;

  return {
    props: {
      ...params,
      index: category.split('-')[1],
    },
  };
}
export default TrainingInfos;
