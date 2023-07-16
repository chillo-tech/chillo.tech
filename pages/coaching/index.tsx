import Debug from '@/components/Debug';
import RenderHtmlContent from '@/components/RenderHtmlContent';
import ImageDisplay from '@/components/image-display';
import Metadata from '@/components/metadata';
import Layout from '@/layouts/opened';
import { fetchData } from '@/services';
import { page } from '@/utils';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

function Coaching() {
  const [data, setPage] = useState<any>();

  useQuery<any>({
    queryKey: ['page-coaching'],
    queryFn: () =>
      fetchData({
        path: `/api/backoffice/page/1`,
        fields: page,
      }),
    onSuccess: (data) => {
      setPage(data.data.data);
    },
  });
  return (
    <Layout>
      {data ? (
        <>
          <Metadata entry={data} />
          <section className="container mx-auto">
            <div className="card bg-white rounded-lg my-2 relative h-full">
              <ImageDisplay
                imageClasses="object-cover overflow-hidden w-full h-full rounded-lg"
                wrapperClasses="absolute w-full h-full object-cover overflow-hidden rounded-lg border-2 border-blue-700"
                image={data.image}
              />
              <div className="relative py-32 px-10 flex items-start bg-slate-900/70 rounded-lg">
                <article className='w-1/2 z-50'>
                  <RenderHtmlContent content={data.about} classes="text-3xl font-extralight text-slate-200 mb-24" />
                  <a
                  href="https://calendly.com/chillo-tech/30min"
                  className="rounded-lg bg-blue-900 text-white text-xl flex-none font-extralight px-4 py-4"
                >
                  Réservez un créneau de 30 minutes (20€)
                </a>
                </article>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </Layout>
  );
}

export default Coaching;
