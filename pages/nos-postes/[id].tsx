import Layout from '@/layouts/opened';
import ReactMarkdown from 'react-markdown';
import JobList from '@/components/job-list/JobList';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { fetchData } from '@/services';
import { emplois } from '@/utils';
import ImageDisplay from '@/components/image-display';
import RenderHtmlContent from '@/components/RenderHtmlContent';
import Head from 'next/head';

function OfferDisplay({ index }: any) {
  const router = useRouter();
  const [data, setData] = useState<any>({});
  useQuery<any>({
    queryKey: ['emplois', index],
    enabled: !!index,
    queryFn: () =>
      fetchData({
        path: `/api/backoffice/emplois/${index}`,
        fields: emplois,
      }),
    onSuccess: (data) => {
      setData(data.data.data);
    },
  });
  return (
    <>
      <Layout>
        {data && data.image ? (
          <>
          <Head>
            <title>{data.title}</title>
            <meta property="og:title" content={data.title} />
            <meta name="description" content={data.about}/>
            <meta name="og:description" content={data.about}/>
          </Head>
            <section className="container job-item mx-auto my-6">
              <section className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                <div className="hidden md:block">
                  <ImageDisplay
                    imageClasses="object-cover overflow-hidden rounded-lg w-full h-full"
                    wrapperClasses="relative w-full h-60 object-cover overflow-hidden rounded-lg"
                    image={data.image}
                  />
                </div>
                <div className="border-2 border-blue-700 infos font-extralight rounded-lg bg-white md:col-span-3 justify-between flex flex-col">
                  <div className="flex flex-col justify-between p-5">
                    <h4 className="from-slate-900 font-extrabold text-2xl text-blue-900">
                      {data.title}
                    </h4>
                    <p className="text-slate-400">
                      {data.contrat} | {data.address}
                    </p>

                    <RenderHtmlContent content={data.about} />
                    <h3 className="font-bold text-blue-900 text-xl mt-6 mb-1">Vos taches</h3>
                    <RenderHtmlContent content={data.description} />

                    <h3 className="font-bold text-blue-900 text-xl mt-6 mb-1">Votre profil</h3>
                    <RenderHtmlContent content={data.profile} />

                    <h3 className="font-bold text-blue-900 text-xl mt-6 mb-1">
                      Processus de recrutement
                    </h3>
                    <RenderHtmlContent content={data.process} />

                    <h3 className="font-bold text-blue-900 text-xl mt-6 mb-1">Remuneration</h3>
                    <ReactMarkdown className="list-disc text-lg">{data.remuneration}</ReactMarkdown>
                  </div>
                  <p className="flex justify-center pb-5">
                    <Link
                      passHref={true}
                      href={`/nous-contacter?offre=${data.id}`}
                      className="flex mx-auto justify-items-center items-center shadow-lg rounded-md bg-blue-50 border border-blue-200 p-4"
                    >
                      <span className="font-extralight text-xl text-blue-900">
                        {' '}
                        Postuler pour cette offre
                      </span>
                    </Link>
                  </p>
                </div>
              </section>
            </section>
            <JobList />
          </>
        ) : null}
      </Layout>
    </>
  );
}
export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;

  return {
    props: {
      ...params,
      index: id.split('-')[0],
    },
  };
}
export default OfferDisplay;
