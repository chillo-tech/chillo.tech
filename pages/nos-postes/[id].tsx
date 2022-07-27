import ImageCard from "../../components/ImageCard";
import Layout from "../../layouts/opened";
import ReactMarkdown from "react-markdown";
import JobList from "../../components/job-list/JobList";


function OfferDisplay({data}) {
  const {id, image, title, contrat, address} = data;
  return (
    <Layout>
      <section className='container job-item mx-auto my-6'>
        <section className="grid grid-cols-1 items-center md:grid-cols-4 md:gap-10">

          <div className="hidden md:block" >
            <ImageCard  title={`${contrat} | ${address}`} subtitle={title} src={`https://backoffice.chillo.fr${image[0].formats.medium.url}`}/>
          </div>
          <div className="border-2 border-blue-700 infos font-extralight rounded-lg bg-white md:col-span-3 justify-between flex flex-col">
            <div className='flex flex-col justify-between p-5'>
              <h4 className='from-slate-900 font-extrabold text-2xl text-blue-900'>{title}</h4>
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
            <p></p>
          </div>
        </section>
      </section>
      <JobList />
    </Layout>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://backoffice.chillo.fr/chillo-services-jobs/${id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default OfferDisplay;
