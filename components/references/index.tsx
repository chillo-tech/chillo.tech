import Image from 'next/image';
import React, { useState, useEffect } from 'react'

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
    
    <div className="container mx-auto grid grid-rows-1 grid-flow-col gap-4 references my-14">
    {
          references.map(
            (item, index) =>(
              <div 
                key={`reference-${index}`}>
                <Image
                    src={`${process.env.BACKOFFICE_URL}${item.image[0].url}`} alt={`${item.image[0].alternativeText}`} 
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
  )
}

export default References