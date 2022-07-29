import React from 'react';

function Title({children}) {
  return (
    <h2 className='title px-5 from-slate-900 font-extrabold text-2xl md:text-4xl'>
      {children}
    </h2>
  );
}

export default Title;