import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
type links = {
  path: string
}
function NetworkShare({path}: links) {
  return (
    <div className="partager text-center my-3">
      <h4 className='font-extralight text-lg'>Partager sur</h4>
      <p className='grid grid-flow-col items-center justify-center'>
          <Link target="_blank" href={`${process.env.LINKEDIN_SHARE_LINK}${process.env.DNS}/${path}`} passHref={true}>
            <FaLinkedinIn color='text-slate-300' className='px-3 text-5xl cursor-pointer'/>
          </Link>
          <Link href={`${process.env.TWITTER_SHARE_LINK}${process.env.DNS}/${path}`} passHref={true}>
            <FaTwitter color='text-slate-300' className='px-3 text-5xl cursor-pointer'/>
          </Link>
          <Link href={`${process.env.FACEBOOK_SHARE_LINK}${process.env.DNS}/${path}`} passHref={true}>
              <FaFacebook color='text-slate-300' className='px-3 text-5xl cursor-pointer'/>
          </Link>
      </p>
    </div>
  )
}

export default NetworkShare