import React from 'react'
import Navbar from './Navbar'
import Hero1 from './Hero1';
import ScrollButton from './ScrollButton';
import AboutUs from './AboutUs';
import ImageDesign from './ImageDesign';
import Footer from './Footer'
import Bottom from './Bottom';
import EnhanceVoice from './EnhanceVoice';
import NFTS from './NFTS';
import LLMs2 from './LLMs2';
import LLMs1 from './LLMs1';
import DistinctiveFeatures from './DistinctiveFeatures';
import FuturePlans from './FuturePlans';
import SocialSphere from './SocialSphere';
import AskedQuestions from './AskedQuestions';



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 />
      <ScrollButton />
      <AboutUs/>
      <ImageDesign/>
      <EnhanceVoice/>
      <NFTS/>
      <LLMs1/>
      <LLMs2/>
      <DistinctiveFeatures/>
      <FuturePlans/>
      <SocialSphere/>
      <AskedQuestions/>

      <Footer />
      <Bottom/>
    </div>
  )
}

export default Home
