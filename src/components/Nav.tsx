import GoogleLoginButton from './shared/GoogleLoginButton';
import ThemeButton from './shared/ThemeButton';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <NavContainer>
            <Link to="/" className="flex items-center drop-shadow-2xl text-2xl">
                <span id='logo' className='hidden md:block'>By The Way</span>
                <span id='logo' className='block md:hidden mx-auto'>BTW</span>
            </Link>

            <div className="flex md:order-2 items-center gap-2 p-1">
                <ThemeButton/>
                <GoogleLoginButton/>
                <button className={introBtnClass}>Kezdjük</button>
                <HamburgerButton />
            </div>

            {/* Mobile sidebar menu */}
            <div id="navbar-sticky" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className={dropdownMenuClass}>
                    <li><Link to="/" className={linkClass}>Főoldal</Link></li>
                    <li><Link to="service" className={linkClass}>Szolgáltatások</Link></li>
                    <li><Link to="cars" className={linkClass}>Autópark</Link></li>
                </ul>
            </div>
        </NavContainer>
    )
}

interface NavContainerProps {
    children: React.ReactNode
}
const NavContainer = ({ children }: NavContainerProps) => {
    return (
        <div className={'min-h-[65px] bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex flex-wrap items-center justify-between p-2'}>
            {children}
        </div>
    )
}

const HamburgerButton = () => {
    return (
        <button
            data-collapse-toggle="navbar-sticky"
            className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
        >
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
        </button>
    )
}

const linkClass = "block p-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-cyan-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

const introBtnClass = "transition-all duration-400 ease-in text-white w-fit h-9 dark:text-black bg-blue-600 dark:bg-cyan-50 hover:dark:bg-cyan-100 hover:bg-[#4285F4]/90 hover:scale-[103%] hover:ring-3 focus:outline-none focus:ring-[#4285F4]/40 font-medium rounded-xl text-sm py-1 px-3 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55"

const dropdownMenuClass = "flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 place-items-top md:place-items-center"
export default Nav