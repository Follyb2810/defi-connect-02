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
import { LightSpeed, Slide, Zoom } from 'react-reveal';


function App() {
  return (
   <div className='overflow-hidden'>
   <Slide bottom>
   <Hero/>
  </Slide>
  <Slide right>
  <Borrow/>
</Slide>
<Slide bottom>
<WhyDefi/>
</Slide>
<Slide left>
<BorrowInput/>
</Slide>
<LightSpeed right>
        </LightSpeed>
        <LightSpeed left>

          <Solution/>
        </LightSpeed>
        <Zoom>
        <Utilize/>

        <GetToKnowUs/>
      </Zoom>
       <Zoom>
       <Team/>
    </Zoom>
    <Slide bottom>

    <Faq/>
    <RoadMap/>
  </Slide>
   <Contact/>
   
   
   </div>
  );
}

export default App;


