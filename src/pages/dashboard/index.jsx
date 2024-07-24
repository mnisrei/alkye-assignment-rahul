import React from 'react'
import { LOGOLIGHT } from '../../assets';
import { useSelector } from 'react-redux';
import ImageCarousel from '../../components/image-carousel';
import { useEffect } from 'react';
import { useState } from 'react';
import { getRequest } from '../../utils/api-instance';
import { groupArticlesByPrompt } from '../../utils/functions';

function Dashboard() {
    const user = useSelector(state => state?.auth?.user);
    const [imageData, setImageData] = useState([])
    const getData = async () => {
        try {
            const response = await getRequest('/', {});
            if (response?.data) {
                const filterData = groupArticlesByPrompt(response?.data)
                console.log(filterData, "filterData");
                setImageData(filterData)
            }
        } catch (error) {
            setImageData([])
        }
    }

    useEffect(() => {
        if (user?.customer_name) {
            getData()
        }
    }, [])

    return (
        <div className='h-full w-full flex px-9 pt-9 sm:px-16 sm:pt-16 md:pt-20  md:px-20 lg:px-24 lg:pt-24 bg-black text-white justify-center'>
            <div className='flex flex-col w-full max-w-[1260px] h-full gap-12 md:gap-20'>
                <LOGOLIGHT className="w-16 h-8 md:w-32 md:h-16 " />
                <div className='flex flex-col gap-3 md:gap-6 text-start'>
                    <span className='sm:text-xl md:text-5xl flex gap-2'>Welcome <p className='underline'>{user?.customer_name}</p></span>
                </div>
                {
                    imageData?.length > 0 && imageData?.map((data) => {
                        return (
                            <div key={data?.title} className='flex flex-col gap-3 md:gap-6 text-start'>
                                <span className='sm:text-lg md:text-4xl'>{data?.title}</span>
                                <ImageCarousel images={data?.images} />
                            </div>
                        )
                    }

                    )
                }

            </div>
        </div>
    )
}

export default Dashboard