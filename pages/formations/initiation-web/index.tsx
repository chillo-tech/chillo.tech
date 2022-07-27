import React from 'react'
import Layout from '../../../layouts/opened';
import ReactMarkdown from "react-markdown";
import { Tabs } from '../../../components';
import {dateFormat} from '../../../utils';
import Inscription from '../../../components/inscription';
import Image from 'next/image';

function InitiationWeb({data}){
  return (
    <Layout>
      <section className="container text-xl mx-auto training py-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col justify-between description bg-slate-100 p-4 border-2 border-blue-700 rounded-lg md:col-span-2">
            <div>
              <h1 className='from-slate-900 font-extrabold text-2xl text-blue-900 mt-3'>{data.title}</h1>
              <p className='mb-3 text-slate-700 text-extrabold'>
                <span>{data.duration}</span>
                <span className='mx-2'>-</span>
                <span>{data.price}</span>
              </p>
            </div>
            <div>
              <ReactMarkdown className='mb-4 font-extralight'>{data.abstract}</ReactMarkdown>
              <ReactMarkdown className='mb-4 font-extralight'>{data.description}</ReactMarkdown>
            </div>
            <div className="container flex justify-center py-6 flex-col items-center md:flex-row">
              {
                  data.image.slice(0).reverse().map(
                    (item, index) =>(
                      <div 
                        key={`image-${index}`} className="mx-5">
                        <Image  
                            src={`https://backoffice.chillo.fr${item.url}`} 
                            alt={`${item.alternativeText}`} 
                            width='100%'
                            height='100%'
                            objectFit='contain'
                            priority
                        />
                      </div>
                    )
                  )
              }
           
            </div>
          </div>
          <div className="infos bg-slate-200 py-3 rounded-md px-3 md:px-10">
            <Inscription to="Initialisation web" start={dateFormat(data.start)} end={dateFormat(data.end)}/>
          </div>
        </div>
      </section>
      <section className='bg-white py-10'>
        <div className="container mx-auto text-x description">
          <Tabs links={[{label: 'Description'}, {label: 'Programme'}, {label: 'Et après'}]}>
            <ReactMarkdown>{data.description}</ReactMarkdown>
            <ReactMarkdown>{data.program}</ReactMarkdown>
            <ReactMarkdown>{data.next}</ReactMarkdown>
          </Tabs>
          </div>
      </section>
    </Layout>
  )
}

export default InitiationWeb;

// This gets called on every request
export async function getServerSideProps(context) {
  const res = await fetch(`https://backoffice.chillo.fr/trainings/62dc666da6ced0010719c932`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}