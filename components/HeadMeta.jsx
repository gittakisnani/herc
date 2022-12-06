import Head from 'next/head'
import React from 'react'

const HeadMeta = ({ title, desc }) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
    </Head>
  )
}

export default HeadMeta