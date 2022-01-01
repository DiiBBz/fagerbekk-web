import styles from '../styles/Layout.module.css'
import Navbar from './nav/navbar'
import Head from 'next/head'
import Footer from './footer/footer'

export default function Layout({ children }) {
    return <>
        <Head>
            <title>Fagerbekk</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </>
  }