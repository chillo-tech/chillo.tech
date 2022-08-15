import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars, FaChartBar, FaClock, FaHistory, FaRegChartBar, FaRegClock } from 'react-icons/fa';

function Card({data}) {
  const [isLoading, setLoading] = useState(true);
  const cn = (...classes: string[]) =>{
    return classes.filter(Boolean).join(' ')
  }
  const loaderProp =({ src }: {src: string}) => {
    return src;
  }
  return (
    <div className="hover:shadow-md group bg-white rounded-lg border border-gray-300" >
      <div className="relative h-100 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg xl:aspect-w-7 xl:aspect-h-5">
        <Image
            src={`${process.env.BACKOFFICE_URL}${data?.coverImage[0]?.url}`} 
            alt={data.description} 
            layout="fill"
            objectFit="cover"
            loader={loaderProp}
            className={cn(
              'duration-700 ease-in-out group-hover:opacity-75',
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
          />
      </div>
      <div className="px-3 py-4">
        <p className='grid grid-cols-2 mt-1 text-sm text-gray-400'>
          <span className='text-left flex items-center justify-start'>
            <FaRegChartBar />
            {data.level === 'BEGINER' && <span className='mx-1'>Débutant</span> }
            {data.level === 'INTERMEDIATE' && <span className='mx-1'>Intermediaire</span> }
            {data.level === 'CONFIRMED' && <span className='mx-1'>Confirmé</span> }
          </span>
          <span className='text-right flex items-center justify-end'>
            <FaRegClock />
            <span className='mx-1'>{data.hours}</span>
            heures
          </span>
        </p>
        <div className="py-2">
          <h2 className="text-xl text-gray-700 font-extrabold">{data.title}</h2>
          <div className="abstract text-ellipsis text-gray-500 truncate hover:text-clip">
            {data.abstract}
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-400 flex justify-between items-center">
          <span>{data.alias}</span>
          <span>{data.duration}</span>
        </p>
      </div>
    </div>
  )
}

export default Card
