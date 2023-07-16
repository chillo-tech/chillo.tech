import { fetchData, handleError } from '@/services';
import { customers } from '@/utils';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import ImageDisplay from '../image-display';
function References() {
  const [isError, setIsError] = useState(false);
  const [references, setReferences] = useState([]);
  const { isLoading } = useQuery<any>({
    queryKey: ['user-customers'],
    queryFn: () =>
      fetchData({
        path: `/api/backoffice/customers`,
        fields: customers,
      }),
    onSuccess: ({ data: { data } }: any) => {
      setReferences(data);
    },
    onError: (error: any) => {
      setIsError(true), handleError(error);
    },
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {references && references.length ? (
        <div className="container mx-auto items-center text-center grid grid-cols-2 md:grid-cols-4 gap-4 references my-14">
          {references.map((item: any, index: number) => (
            <ImageDisplay
              key={`image-${index}`}
              imageClasses="object-contain overflow-hidden rounded-lg w-full h-full"
              wrapperClasses="relative w-full h-60 object-cover overflow-hidden rounded-lg"
              image={item.image}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default References;
