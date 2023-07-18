import Debug from '@/components/Debug';
import RenderHtmlContent from '@/components/RenderHtmlContent';
import ImageDisplay from '@/components/image-display';
import Metadata from '@/components/metadata';
import Layout from '@/layouts/opened';
import { fetchData } from '@/services';
import { page } from '@/utils';
import Link from 'next/link';
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
                imageClasses="object-cover bottom-10 overflow-hidden w-full h-full rounded-lg"
                wrapperClasses="absolute w-full h-full object-cover overflow-hidden rounded-lg border-2 border-blue-700"
                image={data.image}
              />
              <div className="relative py-16 md:px-10 px-4 flex items-start bg-gray-900/30 rounded-lg">
                <article className='md:w-1/2 z-50'>
                  <RenderHtmlContent content={data.about} classes="md:text-3xl font-extralight text-white mb-12" />
                  <Link
                  href="https://calendly.com/chillo-tech/30min"
                  className="rounded-lg bg-blue-900 text-white md:text-xl text-sm flex-none font-extralight px-4 py-4"
                >
                  Réservez un créneau de 30 minutes (20€)
                </Link>
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
