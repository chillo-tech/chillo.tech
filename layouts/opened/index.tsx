import Head from 'next/head';
import Footer from './Footer';
import React from 'react';
import Header from './Header';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
const Layout = ({ children }: any) => {
  return (
    <section className="bg-gradient-to-r to-slate-100 via-purple-50 from-blue-100 flex flex-col justify-between min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:title" content="chillo services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="chillo services" />
        <title>
          chillo services|Société de conseil en nouvelles technologies centrée sur l'expérience
          client.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <Link
        href="https://wa.me/33761705745"
        target="_blank"
        passHref={true}
        className="flex items-center gap-2 fixed bottom-4 right-3 md:bottom-4 md:right-2 text-white bg-green-500 rounded-3xl py-2 px-4"
      >
        <FaWhatsapp className="text-4xl" /> <span>Contactez nous</span>
      </Link>
    </section>
  );
};

export default Layout;
