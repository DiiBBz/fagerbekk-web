import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Navbar from '../components/nav/navbar'

export default function Home() {
  return (
     <Layout>
        <Head>
            <title>Fagerbekk</title>
        </Head>
        <Navbar></Navbar>
    </Layout>
)}