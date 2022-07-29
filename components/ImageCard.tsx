import Image from 'next/image'
import React from 'react'

function GraphCMSImageLoader({ src, width }) {
  const relativeSrc = (src) => src;

  return `${process.env.BACKOFFICE_URL}${relativeSrc(src)}`;
}

function ImageCard({src, title, subtitle, secondsubtitle= ''}) {
  return (
    <div className="image-card bg-white rounded-lg border-2 border-blue-700 my-2">
      <picture className='flex justify-center'>
        <source srcSet={`${src}`}  type="image/webp" />
        <img
            src={`${src}`}
            alt={`${title} ${subtitle}`}
            className="image"
        />
      </picture>
      <div className="text-wrapper">
      </div>
      <div className="px-3 py-2 text-white text-content">
        <h3 className='font-light text-2xl'>{title}</h3>
        <h4 className='from-slate-900 font-extrabold text-3xl'>{subtitle}</h4>
        <h4 className='from-slate-900 font-extrabold text-3xl'>{secondsubtitle}</h4>
      </div>
    </div>
  )
}

export default ImageCard