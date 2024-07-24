import React from 'react'
import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import AuthWrapper from './auth-wrapper'
const Footer = lazy(() => import('./footer'))

function AppWrapper() {
    return (
        <AuthWrapper>
            <div className='flex flex-col items-center'>
                <Outlet />
                <Footer />
            </div>
        </AuthWrapper>
    )
}

export default AppWrapper