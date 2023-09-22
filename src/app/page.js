'use client'
import Head from 'next/head'
import Home from './home/HHome.js'
// import 'typeface-inter';
import Portfolio from './home/GoTo.js';
import Contact from './home/Contact.js'
// import Testimonial from './home/Testimonial.js'
// import Hackthon from './home/Hackthon.js'
// import StartUpSaturday from './home/StartUpSaturday.js'
// import Ideathon from './home/Ideathon.js'
// import Trekking from './home/Trekking.js'
// import Addons from './home/Addons.js'
const Page = () => {
 
  return (
    <>
      <Head>
        <title>GautamKushwaha | Home</title>
        <meta name="keywords" content="gautam" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

   <Home/>
   <Portfolio/> 
   {/* <StartUpSaturday/>
   <Ideathon/>
   <Trekking/>
   <Hackthon/>  */}
   <Contact/>
    </>
  )
}

export default Page;