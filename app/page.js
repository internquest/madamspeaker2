'use client'
import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TypeWriter from './components/TypeWriter';
import Hero from "./components/Hero";
import SmoothScroll from './components/SmoothScroll';
import Publicrecord from "./components/Publicrecord";
import IncomingCards from "./components/IncomingCards";
import WomenSpeaking from "./components/WomenSpeaking";
import { useEffect, useRef, useState } from "react";
import RealWorkexpe from "./components/RealWorkexpe";
import TrueIndustry from "./components/TrueIndustry";
import Introducing from "./components/Introducing";

export default function Home() {
const parent = useRef(null);  
const child = useRef(null);
const [domloadstate, setdomloadstate] = useState(false);
  function animateTransform(element, maxstartValue, maxendValue,startpadlef,endpadleft,startpadrig,endpadrig, duration) {
    const startTime = performance.now();
  
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
  
      const maxcurrentValue = maxstartValue + (maxendValue -maxstartValue) * progress;
      const padleftcurrentValue = startpadlef + (endpadleft - startpadlef) * progress;
      const padrightcurrentValue = startpadrig + (endpadrig - startpadrig) * progress;
  
      element.style.maxWidth = `${maxcurrentValue}px`; 
      element.style.paddingLeft = `${padleftcurrentValue}px`;
      element.style.paddingRight = `${padrightcurrentValue}px`;
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  
  function animateborderndmargin(element, startValue, endValue,mt, mtend, duration) {
    const startTime = performance.now();
  
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
  
      const currentValue = startValue + (endValue - startValue) * progress;
      const mtcurrentValue = mt + (mtend - mt) * progress;
  
      element.style.borderTopLeftRadius = `${currentValue}px`;
      element.style.borderTopRightRadius = `${currentValue}px`; 
      element.style.marginTop = `${mtcurrentValue}px`; // Example: translateX
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  

  useEffect(() => {
    const handleDOMContentLoaded = (event) => {
      // console.log("DOM fully loaded and parsed");
      animateTransform(parent.current, 1366, 1260,0,20,0,20,800);
      animateborderndmargin(child.current, 0, 30,0,100, 800);
      setdomloadstate(true);
    };
    handleDOMContentLoaded();
    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);
  return (
    <SmoothScroll>
      {/* <Header/>
      <Navbar/> */}
      
        <section className="flex h-full min-h-screen bg-[var(--lavender)] text-[var(--black)]">
        <div ref={parent} style={{maxWidth:'2000px',paddingLeft:'0px',paddingRight:'0px'}} className="w-full ml-auto mr-auto  relative m-0 flex ">
            <div ref={child}  className=" relative  mx-0 mb-0 w-full p-[30px]  rounded-none   flex flex-col justify-center bg-[var(--brown-tint)] items-center mt-[0px] before:content-[''] before:block before:w-[calc(100%-100px)] before:h-[calc(100%-100px)] before:absolute before:bottom-0 before:left-[50px] before:bg-[linear-gradient(to_bottom,var(--black),var(--brown-tint)_1px,var(--brown-tint)_20px)] before:bg-[length:100%_80px]">
                
                <h1 className="">
                  
                    <span className=" relative m-0">
                        <span data-testid="react-typed" className=" relative text-[var(--greenparrot3)] [-webkit-text-stroke:1px_black] font-monaExpandedblack text-[6rem] leading-[1.8] italic m-0">
                          {/* REAL-TIME */}
                            <TypeWriter domloadstate={domloadstate}
                                text='REAL-TIME'
                                speed={40}
                            />
                            {/* <span class="animate-cursor-blink" aria-hidden="true">|</span> */}
                        </span>
                    </span>
                </h1>
                <div className="bg-[var(--primary-col)] px-4 text-white border border-black [-webkit-text-stroke:1px_black] font-monaCondensedbold text-[6rem]  z-[6] leading-[1.5] translate-x-[20%]">PROJECT EXPERIENCE</div>
                <div className=" absolute m-0 w-[calc(100% - 100px)] flex justify-between items-center top-[40px] left-[50px] font-monaMedium">
                    <span className=" relative m-0 text-[1.5rem]">A new path to</span>
                </div>
                <div className=" absolute m-0 w-[calc(100% - 100px)] flex justify-between items-center bottom-[40px] right-[50px] font-monaMedium">
                    <span className=" relative m-0 text-[1.5rem]">in tech</span>
                </div>
            </div>
        </div>

        </section>
        {/* <Hero/>
        <div className="relative z-[3] bg-white py-20"> 
              <p className="text-[90px]  font-bold text-center  text-[var(--primary-col)] font-monaCondensedmeditalic">The projects you built don’t stand out.  </p>
        </div>
        <div className="relative z-[3] bg-[#A08CFF] py-20"> 
              <p className="text-[76px]  font-bold text-center [-webkit-text-stroke:1px_black]   text-white font-monaCondensedbold">Your portfolio feels basic compared to others.  </p>
        </div>
        <RealWorkexpe/>


<div className="min-h-[500px] bg-[var(--primary-col)] text-white flex items-center">
  <p className="text-[22px] leading-[2] text-center text-balance max-w-[683px] font-monaMedium m-auto">Suddenly, your excitement turns into frustration and doubt. You’re 
competing with students who have already done internships, 
built impressive open-source contributions, or worked on projects 
far more advanced than yours. The gap between what you learned 
and what employers are looking for feels overwhelming.</p>

</div>

<div className=" bg-[var(--fourth-col)] py-20 flex flex-col items-center gap-7">
  <h2 className="text-[6rem] font-monaExpandedblack italic leading-[1.7] text-white [-webkit-text-stroke:1px_black]">THE REALITY</h2>
  <div className="px-14 py-16 border-black border-2 bg-white">
    <p className="font-monaRegular text-[1.125rem] leading-[2.2] text-pretty tracking-[.001em] font-normal max-w-[573px] text-[var(--third-col)]">This is the story of **thousands of students** who go through tech 
bootcamps and online courses. The courses promise a lot but often 
deliver the same basic content you could find for free on YouTube. 
The projects you build are cookie-cutter and don’t give you the real 
experience you need to stand out in today’s competitive job market.</p>
  </div>
</div>


<div className="relative z-[3] bg-white py-20"> 
              <p className="text-[6rem] leading-[1.5] text-[var(--greenparrot2)] text-center [-webkit-text-stroke:1px_black]  italic  font-monaCondensedbold">But it doesn’t have to be this way. </p>
        </div>


          <Introducing/>


          <TrueIndustry/>


<div className="bg-black py-32">
  <div className="text-center font-monaCondensedmed font-medium text-[2.5rem] leading-[1.8] mx-auto  text-white max-w-[843px]">Our program isn’t just about learning skills, it’s about **applying**
 them in a real-world setting. You’ll be immersed in real projects, 
just like you would be in an actual job, giving you the competitive
advantage you need in today’s crowded job market.</div>
</div>
 */}

      
      
    </SmoothScroll>
  );
}
