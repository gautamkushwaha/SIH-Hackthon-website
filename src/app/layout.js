import './globals.css'
import React from 'react'

import Nav from './Layout/Nav'
import Footer from './Layout/Footer'


export default function Layout({ children }) {
  return (
   <div class="content">
    <Nav/>
   { children }
    <Footer/>
   </div>
  );
}
