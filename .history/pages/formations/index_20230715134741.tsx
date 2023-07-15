import Head from 'next/head'
import Layout from '@/layouts/opened'
import React, { useEffect, useState } from "react";
import {Card} from '@/components';
import Image from 'next/image';
import { FaGraduationCap, FaLayerGroup, FaPeopleArrows, FaPeopleCarry, FaSchool, FaStar, FaUsers } from 'react-icons/fa';
import { slugify } from '@/utils';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchData, handleError, search } from '@/services';
import ImageDisplay from '@/components/image-display';

function Formations() {
  const router = useRouter();
  const loaderProp =({ src }: {src: string}) => {
    return src;
  }
  const cn = (...classes: string[]) =>{
    return classes.filter(Boolean).join(' ')
  }
  const [trainings, setTrainings] = useState([]);
  const [isError, setIsError] = useState(false);
	const [data, setData] = useState([]);
  const {isLoading} = useQuery<any>({
		queryKey: ["user-trainings"],
    queryFn: () =>  
    fetchData({
      path: `/api/backoffice/Formation`,
      fields: "*",
    }),
    onSuccess: ({data}: any) => {
     setTrainings(data)
    },
    onError: (error: any) => {setIsError(true), handleError(error)},
		refetchOnWindowFocus: false,
	});
  return (
    <Layout>
      <Head>
        <title>CHILLO SERVICES | Nos formations</title>
        <meta property='og:title' content="CHILLO SERVICES - Devenez developpeur"/>
        <meta name='description' content="Formez vous sur, les compétences les plus demandées. Donnez un nouvel élan à votre carrière" />
        <meta name='og:description' content="Formez vous sur, les compétences les plus demandées. Donnez un nouvel élan à votre carrière" />
      </Head>
     
      <section className='heading relative'>
        <div className="training-description absolute inset-0 bg-slate-900/30 z-50">
          <div className="heading-description flex-1 flex flex-col h-full justify-between pt-5">
            <p></p>
            <div className="container px-5 md:px-10 mx-auto">
              <h3 className="text font-extralight text-3xl">chillo.tech academy</h3>
              <div className='font-semibold my-4'>
                <p className='text-3xl md:text-5xl'>Formez vous sur,</p>
                <p className='text-3xl md:text-5xl'>les compétences les plus demandées</p>
                <p className='font-extralight mt-4 mb-10 text-3xl'>Donnez un nouvel élan à votre carrière</p>
                <a href="#nos-formations" className='rounded-lg bg-blue-900 text-white text-xl flex-none font-extralight px-4 py-4'>
                  Consultez nos formations
                </a>
              </div>
            </div>
            <div className="w-full w-100 bg-white border-b-4 border-green-500 mt-10">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
                <div className="course flex items-center justify-center py-3 text-2xl">
                  <span className='bg-blue-400 mr-4 rounded-full'>
                    <FaGraduationCap className='px-3 text-6xl text-white'/>
                  </span>
                  <div>
                    <p className='font-extrabold text-2xl'>6</p>
                    <p className='font-light text-lg'>Formations</p>
                  </div>
                </div>
                <div className="course flex items-center justify-center py-3 text-2xl">
                  <span className='bg-green-400 mr-4 rounded-full'>
                    <FaUsers className='px-3 text-6xl text-white'/>
                  </span>
                  <div>
                    <p className='font-extrabold text-2xl'>1 000+</p>
                    <p className='font-light text-lg'>Etudiants formés</p>
                  </div>
                </div>
                <div className="course flex items-center justify-center py-3 text-2xl">
                    <span className='bg-yellow-400 mr-4 rounded-full'>
                      <FaStar className='px-3 text-6xl text-white'/>
                    </span>
                    <div>
                      <p className='font-extrabold text-2xl'>4.9 / 5</p>
                      <p className='font-light text-lg'>De moyenne globale</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-100 aspect-w-1 aspect-h-2 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-3 2xl:aspect-h-3">
          <ImageDisplay
             wrapperClasses = 'h-full relative overflow-hidden'
             local={true}
             image={{path: '/images/header-formations.jpeg', title: "Apprenez à coder gratuitement, devenez développeur web en ligne pour découvrir le monde de la Tech.  Toutes nos formations"}}/>
        </div>
      </section>

      {
        (trainings && trainings.length)? (
          <section className='bg-rose-50 pt-6' id="nos-formations">
              <h2 className='font-extrabold text-center text-xl md:text-3xl py-4'>
                Sélectionner un cours et enregistrez vous pour notre prochaine session
              </h2>
              <div className="mx-auto max-w-2xl px-4 py-3 sm:py-5 sm:px-2 lg:max-w-7xl lg:px-0">
                <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {trainings.map((training: any) =>
                    <Link key={training.id} 
                      href={{
                        pathname: '/formations/[slug]',
                        query: { slug: slugify(`${training.title}-${training.id}`) },
                      }}
                    >
                     <Card data={training}/>
                    </Link>
                  )}
                </div>
              </div>
          </section>

        ): null
      
      }
    </Layout>
  )
}
export default Formations