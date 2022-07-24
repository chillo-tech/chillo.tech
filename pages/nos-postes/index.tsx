import Image from 'next/image'
import React from 'react'
import { Title } from '../../components'
import ImageCard from '../../components/ImageCard'
import JobList from '../../components/job-list/JobList'
import Layout from '../../layouts/opened'

function Contact() {
  return (
    <Layout>
      <section className='container mx-auto my-6'>
        <section className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
          <div className="hidden md:block" >
           <ImageCard title="Rejoignez nous" subtitle="Nous avons le poste" secondsubtitle="Qu'il vous faut" src="/images/join-us/welcome.jpeg"/>
          </div>
          <div className="border-2 border-blue-700 infos font-extralight rounded-lg bg-white px-3 md:px-0 py-10 md:py-2 md:col-span-2 justify-between items-center flex flex-col">
            <p></p>
            <div className='flex flex-col justify-between items-center'>
              <h4 className='from-slate-900 font-extrabold text-4xl text-blue-900'>Ouvrez nos portes</h4>
              <div className='text-center text-lg py-6'>
                <p className='mb-2 text-lg'> Salarié ou Indépendant,</p> 
                <p>chillo vous offre l’opportunité de travailler sur les plus beaux projets numériques.</p>
              </div>
              <a href="#nos-postes-ouverts" className='bg-gradient-to-l to-slate-600 from-blue-600 border rounded-lg text-white px-8 py-3 md:py-6 text-xl font-extralight'>
                Consultez nos postes ouverts
              </a>
              <div className='text-center text-lg md:my-10 my-5'>
                <p className='mb-2 text-lg'> Rejoignez nous nous allons faire de belles choses ensemble</p>               
                 <p> Vous serrez notre premier centre d&apos;intérêt</p>
              </div>
            </div>
            <p></p>
          </div>
        </section>
      </section>
      <JobList />
     
    </Layout>
  )
}

export default Contact