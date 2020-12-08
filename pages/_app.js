// import '../styles/globals.css'
// import '../styles/unique.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
// import '../styles.css';
import App from 'next/app';

import Layout from '../components/Layout';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

// export default App;