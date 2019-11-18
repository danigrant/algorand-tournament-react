import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class DiscoverAlgo extends App {
  constructor(props) {
    super(props)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/css/utils.css" />
          <link rel="stylesheet" href="/css/styles.css" />
        </Head>
        <Component {...pageProps} />
      </div>
    )
  }
}

DiscoverAlgo.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default DiscoverAlgo
