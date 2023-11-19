import { Dispatch, SetStateAction, createContext, useMemo, useState, useContext } from 'react'

type ThemeContextType = {
    theme: string
    setTheme: Dispatch<SetStateAction<string>>
}
const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    setTheme: () => {},
})
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(localStorage.getItem('color-theme') || 'dark')
    const value = useMemo(() => ({ theme, setTheme }),[theme])

    return (
        <ThemeContext.Provider value={value}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme