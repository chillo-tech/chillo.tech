
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HEADER_LINKS } from '@/app-utils';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const [showMenu, setshowMenu] = useState(false)
  return (
    <header>
      <div className='bg-white'>
        <nav className='container mx-auto flex items-center justify-between p-2 md:p-0'>
            <div className="logo">
              <Link href='/'>
                  <>
                    <span className='md:hidden'>
                      <Image width="120" height="35" src="/images/chillo-services.png" alt="chillo services"/>
                    </span>
                    <span className='hidden md:block'>
                      <Image width="200" height="60" src="/images/chillo-services.png" alt="chillo services"/>
                    </span>
                  </>
                </Link>
            </div>
            <div className="nav">
              <div className="sm-header-links md:hidden cursor-pointer">
                {
                  showMenu ? 
                    <XIcon  className="h-7 w-7 font-extralight text-blue-700" onClick={()=> setshowMenu(!showMenu)}/>
                    : 
                    <MenuIcon className="h-7 w-7 font-extralight text-blue-700" onClick={()=> setshowMenu(!showMenu)}/>
                }
              </div>
              <div className="md-header-links hidden md:flex">
                {
                  HEADER_LINKS.map((link)=> (
                    <Link href={`${link.to}`} key={link.to} className="block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                      >{link.label}
                    </Link>
                  ))
                }
              </div>
            </div>
        </nav>
      </div>
      <div className={`flex flex-col items-center top-0 right-0 left-0 bottom-0 bg-white ${showMenu ? ' min-h-screen block': 'hidden h-0'}`}>
        {
            HEADER_LINKS.map((link)=> (
              <button type='button' onClick={()=> {setshowMenu(false);router.push(`/${link.to}`)}} key={link.to}>
                <span className="md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                >{link.label}</span>
              </button>
            ))
          }
      </div>
  </header>
  )
}
export default Header;
