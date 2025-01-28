import React from 'react'

const Introducing = () => {
  return (
    <div className='bg-[var(--light-peach)] py-20 px-20'>
        <h1 className='text-[4rem] leading-[1.8] font-monaExpandedblack text-white [-webkit-text-stroke:1px_black] mx-auto text-center italic'>INTRODUCING</h1>
        <p className='text-[3rem] leading-[2] font-monaCondensedmed  mx-auto text-center text-[var(--black1)]'>A New Kind of Learning Experience</p>
        <div className='flex gap-12 mt-10'>
            <div className='basis-[50%] bg-black pt-16 pl-10 min-h-[497px]'>
                <div className='flex flex-col h-full w-full items-start'>
                    
                <div className='bg-[var(--fourth-col1)] text-black font-monaMedium p-8 leading-[2] pr-16 text-[1.5rem]'>
                        what if there was  
                        <br/>
                        an alternative to
                </div>
                <div className='self-end border-[var(--fourth-col1)] border-[length:5px] text-[var(--fourth-col1)] font-monaExpandedblack p-5 leading-[1.7] pb-1 -translate-x-[20%] pr-3  text-[2rem]'>
                    bootcamps &
                    <br/>
                    coding courses
                </div>
                </div>
            </div>
            <div className='basis-[50%] bg-[var(--lightgreen)] pt-16 pl-14  min-h-[497px]'>
                <div className='bg-white max-w-[380px] py-5 pb-14 border-black border [&_*]:border-b [&_*]:border-b-[#3B4F23] '>
                    <p  className='text-center text-[1.125rem] leading-[1.8] font-monaMedium'>What if you could </p>
                    <p className='text-[2.5rem] text-[var(--greenparrot3)] mt-7 leading-[.8] font-monaExpandedblack text-center tracking-[.001em]'>skip the fluff</p>
                    <p  className='text-center text-[1.125rem] leading-[1.8] mt-4 font-monaMedium'>and dive straight into</p>
                </div>

                <div className='bg-[var(--primary-col)] pt-1 border translate-y-[-25%] translate-x-[17%] rounded-[10px] border-black pl-5 rotate-[-3.29deg] text-white pr-3 w-max [-webkit-text-stroke:1px_var(--third-col)] font-monaCondensedbold text-[4rem] tracking-[-.015em] leading-[1.3]'>
                    real-world
                    <br/>
                    work experience
                </div>
            </div>
        </div>

        <div className='flex gap-12 mt-10'>
            <div className='basis-[40%] bg-white pt-20  min-h-[545px] border border-black '>
                <div className='border-b w-full border-dashed  border-b-black'>

            <div className='flex text-[2.25rem]  max-w-[245px] ml-16 pb-5 font-monaCondensedbold text-[var(--thick-peach)] flex-col items-center '>
<div className='text-[2.75rem] leading-[1]'><span className='text-[2rem]'>what</span> if</div>
<div className='mt-3 text-[4.75rem]  whitespace-nowrap tracking-[-.001em] leading-[1.8]'><span className='text-[3.5rem]'>you</span>{' '}could</div>
</div>
</div>
<div className=''>
<div className='flex text-[2.25rem]  max-w-[245px] ml-16 mt-10 pb-5 font-monaCondensedbold text-[var(--primary-col)] flex-col items-center '>
<div className='text-[2.75rem]  opacity-90 leading-[1]'><span className='text-[2rem]'>learn</span> by</div>
<div className='mt-3 text-[4.75rem] font-monaExpandedblack whitespace-nowrap tracking-[-.001em] leading-[1.2]'>doing</div>

</div>
                </div>
            </div>
            <div className='basis-[60%] border  border-black pt-12 flex flex-col  pl-10 '>
                <div className='text-[4rem] font-monaExpandedextrasbold  [-webkit-text-stroke:1px_black] tracking-[-.001em] text-[var(--fourth-col)] leading-[1.5] px-4 bg-[var(--green4)] whitespace-nowrap w-min'>working with</div>
                <div className='text-[4rem] font-monaExpandedextrasbold pl-20 mt-10  [-webkit-text-stroke:1px_black] tracking-[-.001em] text-white leading-[1.5] px-4  bg-[#816CFF] whitespace-nowrap w-min '>real teams</div>
                <div className='border border-[var(--third-col)] w-min bg-[var(--fourth-col)] mt-10 pr-10 pl-5 text-[var(--greenparrot3)] text-[4rem] tracking-[.001em] leading-[1.5] [-webkit-text-stroke:1px_black] font-monaCondensedbold font-extrabold whitespace-nowrap px-4'>on real projects</div>
                <div className='border border-black self-end font-monaMedium leading-[2] -translate-x-[20%] px-5 pr-10 py-3 text-[1.25rem] text-black bg-white'>
                    that actually matter...
                </div>
            </div>
            </div>
        

    </div>
  )
}

export default Introducing