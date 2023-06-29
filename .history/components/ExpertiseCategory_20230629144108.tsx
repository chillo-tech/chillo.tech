import Image from 'next/image';
import React from 'react';

function ExpertiseCategory({category}) {
  return (
    <>
    {references && references.length ? (
    <div className='expertise grid grid-flow-row grid-cols-2 md:grid-cols-5'>
      {category.map((item, index)=>(
         <div className="card flex flex-col align-middle items-center p-3 font-weight-lighter mx-auto md:w-3/4 md:w-100" key={`item-${index}`}>
          <div className="image">
            <Image  src={`/images/${item.src}`} alt={item.alt} width="80" height="80"/>
          </div>
          {item.label ? <h4 className="name uppercase font-extrabold">{item.label}</h4> : null}
        </div>
      ))}
    </div>
    : null</>
  )
}

export default ExpertiseCategory;