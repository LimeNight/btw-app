import { useEffect } from 'react';
import useAxiosFunction from "../../hooks/useAxiosFunction";
import useUser from "../../hooks/useUser";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { toastOption } from "../../constants/toastOption";
import { User } from "../../models/User";
import Spinner from './Spinner';
import carInstance from '../../apis/carInstance';

const GoogleLoginButton = () => {
    const { user, setUser } = useUser()
    const [data, error, loading, axiosFetch] = useAxiosFunction<User>()
    const googleLogin = useGoogleLogin({
        onSuccess: ({ code }) => {
            axiosFetch({
                instance: carInstance,
                method: 'post',
                url: '/auth/google',
                data: {
                    code: code
                }
            })
        },
        onError: () => {
            toast.error("Sikertelen hitelesítés!", toastOption)
        },
        flow: 'auth-code',
    })

    const logout = () => {
        googleLogout()
        setUser({
            _id: '',
            google_id: '',
            name: '',
            email: '',
            email_verified: false,
            picture: '',
            isAuthenticated: false,
        })
        sessionStorage.removeItem('user')
    }

    useEffect(() => {
        if (!error && !loading && data) {
            setUser(() => ({
                ...data,
                isAuthenticated: true
            }))
        }
    }, [data])

    if (loading) {
        return (
            <button
                className={GoggleBtnClass}
                disabled
            >
                <Spinner className='w-6 h-6 mx-auto' />
            </button>
        )
    }

    if (!loading && error) toast.error('Sikertelen bejelentkezés!', toastOption)

    if (!loading && !error && !user.isAuthenticated) {
        return (
            <button
                className={GoggleBtnClass}
                onClick={() => googleLogin()}
            >
                <GoogleIconSVG />
                <p className="hidden md:block pr-2 whitespace-nowrap">Sign-in</p>
            </button>
        )
    }

    return (
        <button
            className={GoggleBtnClass}
            onClick={() => logout()}
        >
            <img src={user.picture} alt={user.name} className="w-7 h-7 rounded-lg" style={{boxShadow: '0 0 5px #888'}}/>
            <p className="hidden md:inline-block pr-2">Logout</p>
        </button>
    )
}
const GoggleBtnClass = "transition-all duration-400 ease-in gap-3 text-white w-9 md:w-[100px] dark:text-black bg-blue-600 dark:bg-cyan-50 hover:dark:bg-cyan-100 hover:bg-[#4285F4]/90 hover:scale-[103%] hover:ring-3 focus:outline-none focus:ring-[#4285F4]/40 font-medium rounded-xl text-sm p-1 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55"
const GoogleIconSVG = () => {
    return (
        <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
    )
}

export default GoogleLoginButton