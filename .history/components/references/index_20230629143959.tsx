import Image from 'next/image';
import React, { useState, useEffect } from 'react'
function GraphCMSImageLoader({ src, width }) {
  const relativeSrc = (src) => src;

  return `${process.env.BACKOFFICE_URL}${src}`;
}
function References() {
  const [references, setReferences] = useState([])
  useEffect(() => {
    const read = async() => {
      try {
        const response = await fetch(`${process.env.BACKOFFICE_URL}/chillo-services-customers`);
        const data = await response.json();
        setReferences(data);
      } catch (error) {
        console.log(error);
        setReferences([])
      }
    };
    read();
  }, [])
  return (
    <>
    {(references && references.length) ? (
    <div className="container mx-auto items-center text-center grid grid-cols-2 md:grid-cols-4 gap-4 references my-14">
    {
          references.map(
            (item, index) =>(
              <picture className='flex justify-center'
                key={`reference-${index}`}>
                 <source srcSet={`${process.env.BACKOFFICE_URL}${item.image[0].url}`}  type="image/webp" />
                 <img
                    src={`${process.env.BACKOFFICE_URL}${item.image[0].url}`} 
                    alt={`${item.image[0].alternativeText}`}
                    className="image"
                />
              </picture>
            )
          )
        }
  </div>
  ) : null }
  </>
  )
}

export default References