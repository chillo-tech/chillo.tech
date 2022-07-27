import React, { useState } from 'react';

function Tabs({links, children=[]}) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const updateActiveTab = ({tabIndex}) => {
    setActiveTab(tabIndex);
  }
  return (
    <section className="tabs-wrapper p-4">
      	<ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4">
          {
            links.map((link, index: number) => (
            <li className={`
                    nav-item flex-auto text-center
                    cursor-pointer py-2 px-4 text-gray-500 border-b-2 uppercase
                    ${activeTab===index ? 'text-emerald-600 border-emerald-600': 'text-stone-500 border-stone-500'}
                 `}
                 key={`link-${index}`}
                 tabIndex={index}
                 onClick={()=>updateActiveTab({tabIndex: index})}
              >
                {link.label}
              </li>
            ))
          }
        </ul>
        
        <div className='tabs-body'>
                {children[activeTab]}  
        </div>
    </section>
  )
}

export default Tabs;