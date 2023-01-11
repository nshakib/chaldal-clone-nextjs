import Head from 'next/head';
import React from 'react'

type HeaderMetaProps = {
    title: string;
}

const HeaderMeta = ({title}: HeaderMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default HeaderMeta