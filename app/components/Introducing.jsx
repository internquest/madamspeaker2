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
    </div>
  )
}

export default Introducing