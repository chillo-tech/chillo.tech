import Link from 'next/link';
import React, {useEffect, useState} from 'react'

function JobList() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const read = async() => {
      try {
        const response = await fetch(`${process.env.BACKOFFICE_URL}/chillo-services-jobs`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
        setJobs([])
      }
    };
    read();
  }, [])
  return (
    <section className='open-postions pt-10 pb-2 flex flex-col justify-between items-center bg-white px-3 mb-4 rounded-lg md:rounded-none'>
        <h4 className='from-slate-900 font-extrabold text-blue-900 text-center mb-8'>
          <p className='font-extralight text-xl'>Rejoingez l&apos;équipe</p>
          <p className='text-4xl mt-3' id="nos-postes-ouverts" >Nos postes ouverts</p>
        </h4>
        <div className="font-extralight text-center" >
          <p className='py-1 text-xl'>Nous recherchons des passionnés des talents des personnes bienveillantes. </p>
          <p className='py-1 text-xl'>Parcourez nos postes vacants, trouvez un emploi que vous aimez et postulez.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 my-10 px-30">
          {
              jobs.map((job) => (
                <Link href={`/nos-postes/${job.id}`} key={job.id}>
                  <a className="job-item shadow-lg rounded-md bg-blue-50 border border-blue-200 p-4">
                    <h3 className='font-bold text-xl mb-3 md:pr-48 text-blue-900'>{job.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className='text-slate-400'>
                          {job.contrat} | {job.address} 
                      </p>
                      <span className='bg-green-300 p-2 rounded-md text-green-700'>{job.tags}</span>
                    </div>
                  </a>
                </Link>
              ))
          }
        </div>
    </section>
  )
}

export default JobList
