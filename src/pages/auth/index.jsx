import React, { lazy } from 'react'
import { LOGODARK } from '../../assets';
const LoginFirstStep = lazy(() => import('./login-first-step'));

function LoginPage() {
    return (
        <div className='h-full w-full flex justify-center p-9 sm:p-16 md:p-20 lg:p-24'>
            <div className='flex flex-col w-full gap-12 md:gap-24 max-w-[1260px] h-full p-12 md:p-24 rounded-[50px] bg-white'>
                <LOGODARK className="w-16 h-8 md:w-32 md:h-16 " />
                <LoginFirstStep />
            </div>
        </div>
    )
}

export default LoginPage