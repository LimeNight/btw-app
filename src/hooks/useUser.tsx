import { Dispatch, SetStateAction, createContext, useContext, useMemo, useState, useEffect } from "react"
import { User } from "../models/User"
type UserContextType = {
    user: User,
    setUser: Dispatch<SetStateAction<User>>,
}
export const UserContext = createContext<UserContextType>({
  user: {
    _id: '',
    google_id: '',
    name: '',
    email: '',
    email_verified: false,
    picture: '',
    isAuthenticated: false
  },
  setUser: () => { }
})
export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User>({
    _id: '',
    google_id: '',
    name: '',
    email: '',
    email_verified: false,
    picture: '',
    isAuthenticated: false
  })
  const value = useMemo(() => ({user,setUser}),[user])

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem('user')!)
    sessionUser?.isAuthenticated && setUser(() => ({...sessionUser}) )
  },[])

  useEffect(() => {
    if (user._id !== '' && user.isAuthenticated) {
      sessionStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  return useContext(UserContext)
}

export default useUser