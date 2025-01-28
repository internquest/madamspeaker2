'use client'
import React, { useState } from 'react'

const Navbar = () => {
    const [navstate, setnavstate] = useState(false);
    const handlenav=()=>{
        setnavstate(!navstate)
    }
  return (
    <>
    <div className="box-border fixed m-0 top-0 hidden lg:block left-2/4 bg-[rgb(255,_255,_255)] px-[40px] py-[20px] rounded-tl-[0] rounded-br-[var(--border-radius-large)] rounded-tr-[0] z-[9] rounded-bl-[var(--border-radius-large)] translate-x-[-50%] translate-y-[-10px]">
            <nav className="box-border  relative m-0">
                <ul className="box-border relative m-0 p-0 flex items-center gap-[30px]">
                    <li className="font-[var(--font-serif)] box-border relative m-0 [list-style:none]">
                        <a href="/our-mission" className="box-border relative m-0 no-underline [color:inherit]">
                            <span className="box-border relative m-0">Our Mission</span>
                        </a>
                    </li>
                    <li className="font-[var(--font-serif)] box-border relative m-0 [list-style:none]">
                        <a href="/speech-archive" className="box-border relative m-0 no-underline [color:inherit]">
                            <span className="box-border relative m-0">Speech Archive</span>
                        </a>
                    </li>
                    <li className="font-[var(--font-serif)] box-border relative m-0 [list-style:none]">
                        <a href="/contribute" className="box-border relative m-0 no-underline [color:inherit]">
                            <span className="box-border relative m-0">Contribute</span>
                        </a>
                    </li>
                </ul>
            </nav>
           
        </div>


        <div className='lg:hidden fixed w-full px-[30px] py-[20px] z-[9] top-0'>
            <div className='flex justify-between w-full z-[5] relative items-center'>
            <a aria-label="Home" class="w-[80px]" href="/"><span aria-label="Home"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 59.5"><path d="m100,2.72c-2.21,0-3.91.59-5.12,1.78-1.2,1.13-1.81,2.69-1.81,4.68v2.89h4.32v7.31h-7.53v-9.52c0-3,.9-5.38,2.71-7.14,1.81-1.81,4.28-2.72,7.43-2.72v2.72Zm-12.64,0c-2.21,0-3.91.59-5.12,1.78-1.2,1.13-1.81,2.69-1.81,4.68v2.89h4.32v7.31h-7.53v-9.52c0-3,.9-5.38,2.71-7.14,1.81-1.81,4.28-2.72,7.43-2.72v2.72Z"></path><path d="m0,0h10.54l23.48,52.78h.1L57.6,0h10.54v59.5h-7.13V14.62c0-.96.03-1.93.1-2.89v-2.8h-.2l-22.68,50.57h-8.33L7.23,8.92h-.2c.07,2.32.1,4.65.1,6.97v43.6H0V0Z"></path></svg></span>
            </a>

            <div onClick={handlenav} className='w-[50px] h-[50px] rounded-[50%] relative bg-[var(--peach)]'>
            <svg style={{opacity:navstate?'0':'1'}} className='absolute w-[30px] h-[30px] top-[10px] duration-300 left-[10px]' width="59" height="49" viewBox="0 0 59 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.99996 7.38318C4.84471 5.42766 6.68529 5.47591 8.35175 5.10955C17.1088 3.18439 25.5385 4.19482 33.9972 4.70357C40.6031 5.10089 47.355 4.7802 53.6957 7.23685C54.56 7.57171 55.3594 8.27213 56.1589 9.02849" stroke="black" stroke-width="4.96263" stroke-linecap="round"></path><path d="M2.99979 23.5199C4.83734 21.5576 6.67808 21.5991 8.34318 21.2266C17.0931 19.2692 25.5265 20.2486 33.987 20.7263C40.5943 21.0993 47.3449 20.7537 53.6946 23.187C54.5602 23.5187 55.3621 24.2162 56.1644 24.9696" stroke="black" stroke-width="4.96263" stroke-linecap="round"></path><path d="M2.99976 39.4011C4.94355 37.544 6.77914 37.6877 8.46238 37.4084C17.3075 35.9404 25.6735 37.3872 34.0943 38.3344C40.6707 39.0741 47.4301 39.1044 53.6347 41.8869C54.4805 42.2662 55.2424 43.0072 56.0016 43.804" stroke="black" stroke-width="4.96263" stroke-linecap="round"></path></svg>



            <svg style={{opacity:navstate?'1':'0'}} className='absolute w-[30px] h-[30px] top-[10px] duration-300 left-[10px]' width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.92142 40.2015C4.32691 37.5439 5.86838 36.537 7.03086 35.288C13.1396 28.7248 20.6483 24.7625 27.8956 20.371C33.5555 16.9415 38.9271 12.8383 45.5399 11.2535C46.4412 11.0375 47.4971 11.1591 48.5849 11.3266" stroke="black" stroke-width="4.96263" stroke-linecap="round"></path><path d="M7.26722 3.72198C9.94081 4.00318 11.0185 5.49605 12.3203 6.59907C19.161 12.3953 23.4689 19.7112 28.1933 26.746C31.8829 32.2399 36.2319 37.4145 38.1232 43.9462C38.3809 44.8365 38.3087 45.8969 38.192 46.9913" stroke="black" stroke-width="4.96263" stroke-linecap="round"></path></svg>
            </div>
            </div>

            <div className='fixed top-0 left-0 w-screen h-screen bg-[var(--peach)] z-[4] px-[10px] py-[150px] duration-300 ' style={{transform:navstate?'translateX(0)':'translateX(-100%)',opacity:navstate?'1':'0'}} id='nav'>
                <nav>
                    <ul className='flex flex-col gap-10  items-center'>
                        <li className='text-[30px]'>
                        <a class="" href="/our-mission"><span>Our Mission</span></a>
                        </li>
                        <li className='text-[30px]'>
                        <a class="" href="/our-mission"><span>Speech Archieve</span></a>
                        </li>
                        <li className='text-[30px]'>
                        <a class="" href="/our-mission"><span>Contribute</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
  )
}

export default Navbar
