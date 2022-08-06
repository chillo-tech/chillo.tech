import ImageCard from "../../components/ImageCard";
import Layout from "../../layouts/opened";
import ReactMarkdown from "react-markdown";
import JobList from "../../components/job-list/JobList";
import { useRouter } from 'next/router';
import { useEffect,useState } from "react";
import Link from "next/link";


function OfferDisplay() {

  const router = useRouter();
  const [data, setData] = useState({});
  useEffect(() => {
    const read = async() => {
      try {
        const res = await fetch(`${process.env.BACKOFFICE_URL}/chillo-services-jobs/${router.query.id}`);
        const offer = await res.json();
        setData(offer);
      } catch (error) {
        console.log(error);
        setData({})
      }
    };
    if(router.query.id) {
      read();
    }
  }, [router.query.id])
  return (
    <Layout>
      {
        (data && data.image) ? (
          <>
            <section className='container job-item mx-auto my-6'>
              <section className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                <div className="hidden md:block" >
                  <ImageCard  title={`${data.contrat} | ${data.address}`} subtitle={data.title} src={`${process.env.BACKOFFICE_URL}${data?.image[0].formats.medium.url}`}/>
                </div>
                <div className="border-2 border-blue-700 infos font-extralight rounded-lg bg-white md:col-span-3 justify-between flex flex-col">
                  <div className='flex flex-col justify-between p-5'>
                    <h4 className='from-slate-900 font-extrabold text-2xl text-blue-900'>{data.title}</h4>
                    <p className='text-slate-400'>
                        {data.contrat} | {data.address} 
                    </p>
                    
                    <ReactMarkdown className='list-disc text-lg mt-6'>{data.aboutdescription}</ReactMarkdown>

                    <h3 className="font-bold text-blue-900 text-xl mt-6 mb-1">{data.tasks}</h3>
                    <ReactMarkdown className='list-disc text-lg'>{data.tasksdescription}</ReactMarkdown>

                    <h3 className="font-bold text-blue-900 text-xl mt-6 mb-1">{data.porofile}</h3>
                    <ReactMarkdown className='list-disc text-lg'>{data.profiledescription}</ReactMarkdown>
                  
                    <h3 className="font-bold text-blue-900 text-xl mt-6 mb-1">{data.process}</h3>
                    <ReactMarkdown className='list-disc text-lg'>{data.processdescription}</ReactMarkdown>

                    <h3 className="font-bold text-blue-900 text-xl mt-6 mb-1">Remuneration</h3>
                    <ReactMarkdown className='list-disc text-lg'>{data.Remuneration}</ReactMarkdown>
                  </div>
                  <p className="flex justify-center pb-5">
                  <Link href={`/nous-contacter?offre=${data.id}`}>
                    <a className="flex mx-auto justify-items-center items-center shadow-lg rounded-md bg-blue-50 border border-blue-200 p-4">
                      <span className='font-extralight text-xl text-blue-900'> Postuler pour cette offre</span> 
                    </a>
                  </Link>
                  </p>
                </div>
              </section>
            </section>
            <JobList />
          </>
        ): null
      }
    
    </Layout>
  )
}
/*
// This gets called on every request
export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`${process.env.BACKOFFICE_URL}/chillo-services-jobs/${id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
*/
export default OfferDisplay;
