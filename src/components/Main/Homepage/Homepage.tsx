import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Footer } from './Footer/Footer'
import '../../../styles/index.scss'; 
import BlurPurple from '../../../../public/icons/blur-purple.svg'
import BlurGreen from '../../../../public/icons/blur-green.svg'
import { ContentHome } from './ContentHome/ContentHome';


const Homepage = () => {
  return (
<>
    <div className="containerView">

      <>
        <div className="blur-purple">
          <BlurPurple />
        </div>
        <div className="blur-green">
          <BlurGreen />
        </div>
      </>
    <Navbar />
    <main>
    <ContentHome />       
    </main>
          <Footer />
  </div>
</>


  )
}

export default Homepage