
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ContactBanner } from '../../components';
function Footer() {
  return (
    <>
      <div className="bg-blue-900 pb-3 font-extralight flex flex-col" id="a-propos-de-nous">
        <ContactBanner />
        <div className="container mx-auto text-slate-300 py-3">
          <div className="grid grid-cols-1 gap-10 p-3 md:grid-cols-3 md:p-0 items-center">
            <div className="presentation">
            <p className='mb-5'>CHILLO est une société de conseil en nouvelles technologies.Nous concevons et developpons des applications</p>
            <p>Nous avons deux principales valeurs. Le bonheur de nos salariés 
            est primordial; l’expérience client est notre centre d'intrêt.</p>
            </div>
            <div className="presentation">
            <p className='mb-5'>CHILLO accélère la performance business et digitale des entreprises. </p>
            <p>De la stratégie opérationnelle 
              à la mise en œuvre de solutions de pointe, drivées par les technologies web ou mobiles.</p>
            </div>
            <div className="presentation flex flex-col items-center justify-center">
              <div className='px-10 flex items-center justify-between text-center'>
                <FaLinkedinIn color='text-slate-300' className='px-3 text-6xl'/>
                <FaInstagram className='px-3 text-6xl'/>
                <FaFacebook className='px-3 text-6xl'/>
              </div>
              <div className='py-2'>
                <p>(+33) 7 61 70 57 45</p>
                <p>accueil@chillo.tech</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright border-top-1 text-slate-100 mt-2 font-light">
          <div className="container py-5 text-sm mx-auto text-center border-solid border-t border-gray-600">
            &copy; Copyright {(new Date()).getFullYear()} chillo.tech. Tous droits réservés.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;