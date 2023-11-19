import axios from "axios"
import { useCallback, useState} from 'react';
import { toast } from "react-toastify"
import { toastOption } from "../../constants/toastOption";
import { REACT_APP_CAR_API_BASE_URL } from "../../constants/enviroment";
import useUser from "../../hooks/useUser";

export interface RatingProps {
    id?: string,
    rate: number,
    outOf: number,
    className?: string
}
const Rating = ({ id, rate, outOf, className }: RatingProps) => {
    const {user} = useUser()
    const [userRate, setUserRate] = useState(rate)
    const handleRating = useCallback(async (rate: number) => {
        if (user.isAuthenticated && rate >= 1 && rate <= 5){
            await axios.post(`${REACT_APP_CAR_API_BASE_URL}/rate/${id}`,{
                rate: userRate,
                user_id: user._id
            })
            .then(response => {
                if (response.status === 200) toast.success('Köszönjük!', toastOption)
                //get the new rate from the server
                axios.get(`${REACT_APP_CAR_API_BASE_URL}/cars/${id}`)
                .then(response => setUserRate(response.data.rate))
                .catch(() => toast.error('Valami hiba történt inner!', toastOption))
            })
            .catch(() => toast.error('Valami hiba történt outer!', toastOption))
            .finally(() => console.log('Request done!'))
        }else{
            toast.error('Nem vagyok bejelentkezve!', toastOption)
        }
    },[userRate])

    return (
        <>
            {
                (rate <= outOf && rate >= 0) ? 
                    <div className={`flex items-center ${className}`}>
                        {
                            [...Array(outOf).keys()].map((_, i) => 
                                <Star 
                                    key={i} 
                                    onClick={() => handleRating(i + 1)}
                                    onEnter={() => setUserRate(i + 1)}
                                    onLeave={() => setUserRate(rate)}
                                    className={Math.round(userRate) > i ? YellowStarCColor : GrayStarCColor}
                                />
                            )
                        }
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{rate} / {outOf}</p>
                    </div>
                : 
                    <div className={`flex items-center ${className}`}>
                        {
                            [...Array(5).keys()].map((_, i) => <Star key={i} className={GrayStarCColor}/>)
                        }
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">0 / {outOf}</p>
                    </div>
            }
        </>
    )
}
const YellowStarCColor = "text-yellow-300"
const GrayStarCColor = "text-gray-300"

interface StarProps {
    className: string,
    onClick?: () => void,
    onEnter?: () => void,
    onLeave?: () => void
}
const Star = ({className, onClick, onEnter, onLeave}: StarProps) => {
    return (
        <svg 
            onClick={onClick} 
            onMouseEnter={onEnter} 
            onMouseLeave={onLeave} 
            className={`${className} w-4 h-4 transition duration-200 scale-[130%] hover:scale-[200%] hover:cursor-pointer shadow-2xl`} 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 22 20"
        >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
    )
}
export default Rating