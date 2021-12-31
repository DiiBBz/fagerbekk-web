import styles from '../styles/Layout.module.css'
import Navbar from './nav/navbar'
import Head from 'next/head'

export default function Layout({ children }) {
    return <>
        <Head>
            <title>Fagerbekk</title>
        </Head>
        <Navbar />
        {children}
    </>
  }