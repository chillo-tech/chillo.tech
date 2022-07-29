import React, { useEffect, useState } from 'react'
import Layout from '../../../layouts/opened';
import ReactMarkdown from "react-markdown";
import { NetworkShared, SigninButton, Tabs } from '../../../components';
import {dateFormat} from '../../../utils';
import Inscription from '../../../components/inscription';
import Head from 'next/head';

function InitiationWeb(){
  
  const [data, setData] = useState({});
  useEffect(() => {
    const read = async() => {
      try {
        const res = await fetch(`${process.env.BACKOFFICE_URL}/trainings/62dc666da6ced0010719c932`)
        const offer = await res.json();
        setData(offer);
      } catch (error) {
        console.log(error);
        setData({})
      }
    };
    read();
  }, [])
  return (
    <Layout>
      <Head>
        <title>CHILLO SERVICES | Initiation au web</title>
        <meta property='og:title' content="CHILLO SERVICES - Initiation au web"/>
        <meta name='description' content="Apprenez à coder gratuitement, devenez développeur web en ligne pour découvrir le monde de la Tech. 14h de cours (2h/soir pendant une semaine)" />
        <meta name='og:description' content="Apprenez à coder gratuitement, devenez développeur web en ligne pour découvrir le monde de la Tech. 14h de cours (2h/soir pendant une semaine)" />
      </Head>
      <section className='header bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-2 md:px-0'>
        <div className="container mx-auto grid gap-4 md:grid-cols-3 items-stretch">
          <div className="description p-4 md:col-span-2 text-white flex flex-col justify-center">
            <h1 className='from-slate-900 font-extrabold text-3xl text-center md:text-left md:text-4xl'>{data.title}</h1>
            <p className='mb-3 text-extrabold my-7 text-4xl text-center md:text-left'>
              <span className='text-2xl'>{data.duration}</span>
              <span className='mx-2 text-2xl'>|</span>
              <span className='text-2xl'>{data.price}</span>
            </p>
            <div className="flex flex-row justify-center md:justify-start">
              {
                  data?.image?.slice(0).reverse().map(
                    (item, index) =>(
                      <div 
                        key={`image-${index}`} className="mr-5 formations">
                        <picture className='flex justify-center'
                          key={`reference-${index}`}>
                          <source srcSet={`${process.env.BACKOFFICE_URL}${item.url}`}  type="image/webp" />
                          <img
                              src={`${process.env.BACKOFFICE_URL}${item.url}`} 
                              alt={`${item.alternativeText}`} 
                              className="image"
                          />
                        </picture>
                      </div>
                    )
                  )
              }
            </div>
          </div>
          <div className="links text-2xl p-4 bg-slate-50 border-2 border-blue-700 rounded-lg flex flex-col justify-between">
            <p className='text-2xl text-slate-700 text-extrabold text-center'>
                Prochaine session <br />du 
                <span className="text-3xl ml-1 font-bold">{dateFormat(data.start)}</span>
                <span className="text-3xl mx-1">au</span>
                <span className="text-3xl font-bold">{dateFormat(data.end)}</span>
              </p>
              <NetworkShared path="formations/initiation-web"/>
              <SigninButton />
            
          </div>
        </div>
      </section>
      <section className='bg-white pt-10'>
        <div className="container mx-auto text-xl description">
          <Tabs links={[{label: 'Description'}, {label: 'Programme'}, {label: 'Et après'}]}>
            <div>
              <ReactMarkdown className='mb-4 text-2xl font-extralight'>{data.abstract}</ReactMarkdown>
              <ReactMarkdown className='mb-4 text-2xl font-extralight'>{data.description}</ReactMarkdown>
            </div>
            <ReactMarkdown>{data.program}</ReactMarkdown>
            <ReactMarkdown>{data.next}</ReactMarkdown>
          </Tabs>
          </div>
      </section>
      <section className="container text-xl mx-auto training py-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col justify-around description bg-slate-100 p-4 border-2 border-blue-700 rounded-lg md:col-span-2">
            <div>
              <ReactMarkdown className='mb-4 text-2xl font-extralight'>{data.abstract}</ReactMarkdown>
              <ReactMarkdown className='mb-4 text-2xl font-extralight'>{data.description}</ReactMarkdown>
            </div>
          </div>
          <div className="infos bg-slate-200 py-3 rounded-md px-3 md:px-10" id="inscription">
            <Inscription to="Initialisation web" start={dateFormat(data.start)} end={dateFormat(data.end)}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default InitiationWeb;
