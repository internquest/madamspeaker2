'use client'
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import TypeWriter from './TypeWriter';

export default function Hero() {
    const ref = useRef(null);
    const containref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [startTyping, setStartTyping] = useState(false);
    const [deepopacityval, setdeepopacityval] = useState(0);
    const [selfassopacityval, setselfassopacityval] = useState(0);
    const [masculineopacityval, setmasculineopacityval] = useState(0);
    const [itstimetext, setitstimetext] = useState('');
const [handtransval, sethandtransval] = useState('100%');
const [contaienrstate, setcontaienrstate] = useState('');
    useEffect(() => {
        if (isInView) {
            setStartTyping(true);
        }
    }, [isInView]);

    const{scrollYProgress}=useScroll({
        target: containref,
        offset: ['start .20', '.5 .4'],
    })
    const hero=useScroll({
        target: containref,
        offset: ['start end', 'end end'],
    })
    const containermotionval=useScroll({
        target: containref,
        offset: ['start end', 'end start'],
    })
    // const motiontranshandval=useTransform(scrollYProgress,[0,1],['100%','0%'])
    // const deepcirlcemotionval=useTransform(scrollYProgress,[.2,.8],[0,1])
    // const selfasscirlcemotionval=useTransform(scrollYProgress,[.4,.7],[0,1])
    // const masculinecirlcemotionval=useTransform(scrollYProgress,[.8,1],[0,1])
    // // const itstimemotionval=useTransform(hero.scrollYProgress,[0,1],[0,1])
    // useMotionValueEvent(motiontranshandval,'change',(latest)=>{
    //     // console.log(latest)
    //     sethandtransval(latest)
    // })
    // useMotionValueEvent(deepcirlcemotionval,'change',(latest)=>{
    //     // console.log(latest)
    //     setdeepopacityval(latest)
    // })
    // useMotionValueEvent(selfasscirlcemotionval,'change',(latest)=>{
    //     // console.log(latest)
    //     setselfassopacityval(latest)
    // })
    // useMotionValueEvent(masculinecirlcemotionval,'change',(latest)=>{
    //     // console.log(latest)
    //     setmasculineopacityval(latest)
    // })
    useMotionValueEvent(hero.scrollYProgress,'change',(latest)=>{
        // console.log(hero.scrollYProgress.get())
        // console.log(latest);
        
        setitstimetext(latest)
    })
    const itstimetextopacity=useTransform(hero.scrollYProgress,[.9,1],[0,1])
    
    const itstimetexttransform=useTransform(hero.scrollYProgress,[.9,1],['100%','0%'])
    useMotionValueEvent(containermotionval.scrollYProgress,'change',(latest)=>{
        // console.log(latest);
        setcontaienrstate(latest)
    })

    return (
        <div ref={containref} className='h-[100vh] bg-[var(--greenparrot2)]'>
            <section style={{position: itstimetext>.999&&contaienrstate<1?'fixed':'',left: itstimetext>.999&&contaienrstate<1?'0':'',top: itstimetext>.999&&contaienrstate<1?'0px':'',transform:contaienrstate===1&&`translate(0px,902px)`}} className='w-full'>
            <section className='h-[100vh] m-0 '>
                <div className='w-full absolute bottom-full'>
                    <div className='flex justify-start w-full max-w-[1260px] px-5 my-0 mx-auto'>
                        <button className='rounded-tl-[30px] rounded-tr-[30px] bg-[var(--tomato)] relative left-auto bottom-auto min-w-[260px] pt-[18px] px-[30px] pb-[8px] cursor-pointer'>
                            <span>Scroll down <span>↓</span></span>
                        </button>
                    </div>
                </div>
              <div className=' h-full flex justify-center items-center py-32'>
                <div className='mx-auto flex flex-col gap-5 items-center'>
                    <h2 className='text-[4.5rem] font-monaBold [-webkit-text-stroke:1px_var(--third-col)] leading-[1.5] italic text-white  tracking-tighter'>IMAGINE THIS</h2>
                    <p className='text-[#002dda]/[.85] text-[1.125rem] font-monaMedium leading-[1.8] tracking-[.001em] text-center max-w-[608px]'>You complete a full-stack development or data science course, spend 
weeks or months learning, and build a few basic projects. With a fresh 
sense of accomplishment, you start applying for internships, excited to 
finally put your new skills to use. But as you send out application after 
application, you realize something.</p>
                </div>
              </div>
            </section>
            </section>
        </div>
    );
}
