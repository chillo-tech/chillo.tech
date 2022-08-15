import React from 'react'
import {useRouter} from "next/router";
import Layout from '../layouts/opened';

function PageNotFound() {
	const router = useRouter();
  const goToHomePage = () => {
		router.push('/');
	}
  return (
    <Layout>
        <section className='container mx-auto py-32 md:my-auto  flex flex-col justify-center'>
          <div className='bg-white p-5 rounded-xl text-blue-800 text-lg w-3/4 mx-auto'>
            <p className='text-center my-5'>Désolé, La page que vous recherchez n&apos;existe pas</p>
            <p className='text-center my-5'>
              <button onClick={goToHomePage}
                  className="mr-2 w-3/4 mx-auto border border-blue-800 hover:border-blue-800 text-blue-800 font-light py-2 px-4 rounded-lg shadow-sm">
                    Retourner  à l&apos;accueil
              </button>
            </p>
          </div>
        </section>
       
    </Layout>
  )
}

export default PageNotFound
