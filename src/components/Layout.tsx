import Nav from './Nav'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <>
      <header className={headerClass}>
        <Nav />
      </header>
      <main className={mainClass}>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  )
}

const headerClass = 'transition duration-200 ease-in-out min-h-content sticky top-0 z-20 user-select-none'
const mainClass = 'transition duration-200 ease-in-out bg-cyan-50 dark:bg-cyan-950 overflow-scroll max-h-screen text-black dark:text-cyan-100'

export default Layout