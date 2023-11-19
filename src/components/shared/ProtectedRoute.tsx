import React from 'react'
import useUser from '../../hooks/useUser';
import { toast } from 'react-toastify';
import { toastOption } from '../../constants/toastOption';
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const {user} = useUser()
    if(!user.isAuthenticated) {
        toast.error("You must be logged in to view this page", toastOption)
        return<Navigate to="/"/>
    }

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute