import React from 'react'
import { FbIcon, InstaIcon, TwitchIcon, TwitterIcon, YoutubeIcon } from '../assets'
import { footerMenu } from '../constants'

function Footer() {
    return (
        <div className='bg-black flex justify-center h-full w-full p-9 sm:p-16 md:p-20 lg:p-24'>
            <div className='flex flex-col gap-10 md:gap-20 max-w-[1260px] w-full'>
                <div className='flex gap-6 md:gap-12'>
                    <FbIcon className={"w-6 h-6 md:w-12 md:h-12"} />
                    <InstaIcon className={"w-6 h-6 md:w-12 md:h-12"} />
                    <TwitterIcon className={"w-6 h-6 md:w-12 md:h-12"} />
                    <TwitchIcon className={"w-6 h-6 md:w-12 md:h-12"} />
                    <YoutubeIcon className={"w-6 h-6 md:w-12 md:h-12"} />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 text-start gap-2'>
                    {
                        footerMenu?.map((menu, index) => {
                            return <span className='text-white text-xs sm:text-sm md:text-lg font-semibold cursor-pointer w-auto' key={index}>{menu?.title}</span>
                        })
                    }
                </div>
                <span className='text-[#454545] text-xs sm:text-sm md:text-lg flex gap-1 font-semibold'>© <p className='text-white'>Alkye Test</p></span>
            </div>
        </div>
    )
}

export default Footer