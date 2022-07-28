import type { NextPage } from 'next';
import Layout from '../layouts/opened';
import { ExpertiseCategory, Tabs, Title } from '../components';
import { EXPERTISE, REFERENCES, HEADING } from '../app-utils';
import Image from 'next/image';
import References from '../components/references';
const Home: NextPage = () => {
  return (
    <Layout>
      <section className='homepage'>
        <section className="expertise">
            <div className="container mx-auto py-5 grid md:grid-cols-3 md:gap-3">
            {
                  HEADING.map(
                    (item, index) =>(
                      <div className="card bg-white rounded-lg border-2 border-blue-700 my-2" key={index} 
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        height: "500px",
                        maxHeight: "500px",
                        maxWidth: "100%",
                        overflow: 'hidden',
                        borderRadius: 15
                      }}>
                        <Image  src={`/images/${item.src}`} alt={`${item.title} ${item.subtitle}`} 
                          layout='fill' 
                          objectFit='cover'
                          priority
                        />
                        <div className="text-wrapper " 
                            style={{
                              zIndex: 2,
                              position: 'absolute', 
                              background: 'rgba(0,0,0, 0.2)',
                              left: 0, right:0, bottom: 0, top: 0}}>
                          <div className="px-3 py-2 text-white" style={{
                            zIndex: 3,
                            position: 'absolute', left: 10, bottom: 10
                            }}>
                            <h3 className='font-light text-2xl'>{item.title}</h3>
                            <h4 className='from-slate-900 font-extrabold text-3xl'>{item.subtitle}</h4>
                            <h4 className='from-slate-900 font-extrabold text-3xl'>{item.secondsubtitle}</h4>
                          </div>
                        </div>
                      </div>
                    )
                  )
                }
            </div>
        </section>
        <section className="expertise bg-rose-50 py-5" id="notre-expert">
          <div className="container mx-auto py-4">
            <Title>
              <p>Notre expertise</p>
            </Title>
            <Tabs links={EXPERTISE.links}>
              {
                EXPERTISE.categories.map(
                  (category, index) =><ExpertiseCategory key={`catgegory-${index}`} category={category} />
                )
              }
            </Tabs>
          </div>
        </section>
        <section className="bg-white pt-10" id="ils-nous-font-confiance">
          <div className="container mx-auto py-4">
            <Title>
              <p>Ils nous font confiance</p>
            </Title>
            <References />
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default Home
