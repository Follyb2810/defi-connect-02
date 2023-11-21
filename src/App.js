import './App.css';
import Borrow from './component/Common/home/Borrow';
import BorrowInput from './component/Common/home/BorrowInput';
import Hero from './component/Common/home/Hero';
import WhyDefi from './component/Common/home/WhyDefi';
import Utilize from './component/Common/home/Utilize';
import Solution from './component/Common/home/Solution';
import Faq from './component/Common/home/Faq';
import RoadMap from './component/Common/home/RoadMap';
import GetToKnowUs from './component/Common/home/GetToKnowUs';
import Partner from './component/Common/home/Partner';
import Contact from './component/Common/home/Contact';
import Team from './component/Common/home/Team';
import {Zoom, Fade, Hinge, Slide } from 'react-awesome-reveal';





function App() {
  return (
   <div className='overflow-hidden'>
   <Fade direction='left'>
        <Hero/>
    </Fade>
   <Fade direction='right'>
      <Borrow/>
    </Fade>  
    <Slide direction='left'>
    <WhyDefi/>
    <BorrowInput/>
    </Slide>
    <Slide direction='right'>
    <Solution/>
    <Utilize/>
    </Slide> 
    <Zoom direction='down'>
    <GetToKnowUs/>
    </Zoom>   
    <Zoom direction='up'>
    <Team/>
    </Zoom>      
    <Slide direction='left'>
    <Faq/>
    </Slide>
    <Slide direction='left'>
    <RoadMap/>
    </Slide>
    
  
   <Contact/>
   
   
   </div>
  );
}

export default App;


