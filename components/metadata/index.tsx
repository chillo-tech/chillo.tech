import Head from 'next/head'
import React, { useMemo ,useState} from 'react'

function Metadata({entry}: any) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const keywords = "centre de formation, centre formation, centre de form, formation informatique formation en ligne formation en intra, formation dans vos locaux, formation certifiante, financements cpf| CHILLO SERVICES";
  useMemo(() => {
    if(entry && entry.metadonnees && entry.metadonnees[0].titre) {
      setTitle(entry.metadonnees[0].titre);
    } else if(entry?.libelle) {
      setTitle(entry?.libelle);
    } else if(entry?.titre) {
      setTitle(entry?.titre);
    }else if(entry?.title) {
      setTitle(entry?.title);
    }else if(entry?.nom) {
      setTitle(entry?.nom);
    }
    if(entry && entry.metadonnees && entry.metadonnees[0].description) {
      setDescription(entry.metadonnees[0].description.replace(/(<([^>]+)>)/ig, ''));
    } else if(entry?.description) {
      setDescription(entry?.description);
    }

  }, [entry])
  return (
      <Head>
        <title>{title}</title>
        <meta name="titre" content={title} />
        <meta name="description" content={description} />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Cache-control" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />
        <meta httpEquiv="cache-Control" content="no-caxhe" />
        <meta name="Keywords" content={`${entry && entry.keywords ? entry?.keywords : `chillo services centre de formation ${keywords}`}`} />
        <meta name="Author" content="esic-online" />
        <meta name="Identifier-URL" content="https://www.esic-online.com" />
        <meta name="Copyright" content="esic-online.com" />
        <meta name="Robots" content="all" />
      </Head>
  )
}

export default Metadata
