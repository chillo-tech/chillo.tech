import Image from 'next/image'
import React from 'react'

function ImageCard({src, title, subtitle, secondsubtitle= ''}) {
  return (
    <div className="card bg-white rounded-lg border-2 border-blue-700 my-2" 
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
                        <Image src={src}  alt={`${title} ${subtitle}`}
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
                            <h3 className='font-light text-2xl'>{title}</h3>
                            <h4 className='from-slate-900 font-extrabold text-3xl'>{subtitle}</h4>
                            <h4 className='from-slate-900 font-extrabold text-3xl'>{secondsubtitle}</h4>
                          </div>
                        </div>
          </div>
  )
}

export default ImageCard