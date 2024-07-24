import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOutUser, setAuthenticatedUser } from '../redux/auth.slice';
import { clearSessionStorage, getSessionStorage } from '../utils/functions';
import { getRequest } from '../utils/api-instance';
import { useNavigate } from 'react-router-dom';
const AuthWrapper = ({
    children,
}) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const checkUserAuthentication = async () => {
        const { token, userId } = getSessionStorage()
        try {
            if (!!token) {
                const response = await getRequest('customer-list/')
                const user = response?.data?.find(x => x?.id == userId)
                dispatch(setAuthenticatedUser({
                    user
                }))
                navigate('/dashboard')
            }
        } catch (error) {
            handleLogout()
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkUserAuthentication()
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logOutUser());
        clearSessionStorage()
    };

    if (loading) {
        return <span className='text-black'>Loading...</span>;
    }

    return <>{children}</>;
};

export default AuthWrapper;
