import { Dispatch, SetStateAction, createContext, useContext, useMemo, useState, useEffect } from "react"
import { User } from "../models/User"
import { useSessionStorage } from '@uidotdev/usehooks';

type UserContextType = {
    user: User,
    setUser: Dispatch<SetStateAction<User>>,
}

//create user context
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

//user provider
export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [sessionUser, setSessionUser] = useSessionStorage<User | null>('user', null)
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

  //check the session storage and set the user
  useEffect(() => {
    (sessionUser !== null && sessionUser?.isAuthenticated) 
      ?
      setUser(sessionUser) 
      : 
      setUser({
      _id: '',
      google_id: '',
      name: '',
      email: '',
      email_verified: false,
      picture: '',
      isAuthenticated: false
    })
  },[])

  //set or remove from session storage
  useEffect(() => {
    (user !== null && user.isAuthenticated)
    ?
    setSessionUser(user)
    :
    setSessionUser(null)
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