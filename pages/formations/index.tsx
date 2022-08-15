import Head from 'next/head'
import Layout from '../../layouts/opened'
import React, { useEffect } from "react";
import Router from "next/router";

function Formations() {
  useEffect(() => {
      Router.push("/formations/initiation-web");
  });
  return (
    <Layout>
      <Head>
        <title>CHILLO SERVICES | Nos formations</title>
        <meta property='og:title' content="CHILLO SERVICES - Initiation au web"/>
        <meta name='description' content="Apprenez à coder gratuitement, devenez développeur web en ligne pour découvrir le monde de la Tech. 14h de cours (2h/soir pendant une semaine)" />
        <meta name='og:description' content="Apprenez à coder gratuitement, devenez développeur web en ligne pour découvrir le monde de la Tech. 14h de cours (2h/soir pendant une semaine)" />
      </Head>
    </Layout>
  )
}
export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/formations/initiation-web"
    }
  }
}
export default Formations