import './App.css';
import Borrow from './component/Common/home/Borrow';
import BorrowInput from './component/Common/home/BorrowInput';
import Hero from './component/Common/home/Hero';
import Stats from './component/Common/home/Stats';
import WhyDefi from './component/Common/home/WhyDefi';
import Utilize from './component/Common/home/Utilize';
import { templatetHead } from './component/data';
import Solution from './component/Common/home/Solution';
import Faq from './component/Common/home/Faq';
import Interest from './component/Common/home/Interest';
import RoadMap from './component/Common/home/RoadMap';
import GetToKnowUs from './component/Common/home/GetToKnowUs';
import Partner from './component/Common/home/Partner';
import Contact from './component/Common/home/Contact';


function App() {
//   const [ { BorrowInputData: { title } } ] = templatetHead;
// const [{a}] =templatetHead
  return (
   <section>
     <Hero/>
     <Borrow/>
     <WhyDefi/>
     <BorrowInput/>
     <Utilize/>
     <Solution/>
     <GetToKnowUs/>
    <Partner/>
    <Faq/>
    <RoadMap/>
    <Contact/>
   </section>
  );
}

export default App;
