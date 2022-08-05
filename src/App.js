import './App.css';

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Navbar from './components/navbar';
import Main from './components/main';
import Step from './components/step';
import BottomLead from './components/bottomlead';
import Footer from './components/footer';
import ButtonTop from './components/backtotop'

import logo from "./assets/logo.png";
import Img_1 from './assets/Img_1.png';
import Img_2 from './assets/Img_2.png';
import Img_3 from './assets/Img_3.png';


function App() {
  const data = {
    main:{
      appType: 'ENJOY YOUR HEALTHY DELICIOUS MEAL',
      tagLine: 'Treat Yourself',
      description: 'At Abefe’s we are passionate about consistently offering first class quality food and services at competitive prices, while supporting local communities and continuously leading the way in the fresh food market.',
      mainActionText: 'Explore now',
    },
    step1: {
      title: 'Create an account',
      heading: 'Create/login to an existing account to get started',
      description: 'An account is created with your email and a desired password.',
      img: Img_1,
      alternate: false,
    },
    step2: {
      title: 'Explore while shopping',
      heading: 'Shop for your favorites meal as e dey hot.',
      description: 'Shop for your favorite meals or drinks and enjoy while doing it.',
      img: Img_2,
      alternate: true,
    },
    step3: {
      title: 'Checkout',
      heading: "When you're done, check out and get it delivered.",
      description: "When you're done, check out and get it  delivered with ease.",
      img: Img_3,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Download the app now.',
      description: 'Available on your favourite store. Start your premium experience now.',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
  }
  return (
    // __________________________TODO: ____________________
    // Add Dancing font to everything (body)
    
    <div className="box-border">
      <div className="flex flex-col">
        
        <Navbar logo={logo}/>
        <Main 
          appType={data.main.appType}
          tagLine={data.main.tagLine}
          description={data.main.description}
          mainActionText={data.main.mainActionText}
          extraActionText={data.main.extraActionText}
        />
        
         <hr className="border-t-4 border-gray-200 lg:w-1/2 lg:mx-auto" />
         
        <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce="false" offset={150} id="faq" style={{textShadow:'0px 1px 1px gray'}}
           className="pt-20 mb-12 lg:mb-20 text-3xl font-semibold text-center text-gray-800 lg:font-bold dancing">How the app works 
        </AnimationOnScroll>
        
        <Step
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
          />
          <Step
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
          />
          <Step
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
          />
          
          <BottomLead 
            actionText={data.bottomLead.actionText}
            description={data.bottomLead.description}
            mainActionText={data.bottomLead.mainActionText}
            extraActionText={data.bottomLead.extraActionText}
          />

          <Footer logo={logo}/>

          <ButtonTop />
      </div>
    </div>
  );
}

export default App;
