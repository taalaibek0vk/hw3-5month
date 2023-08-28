import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <footer>
        Домашние задания Кайрата Таалайбекова!
      </footer>
    </>
  )
}

export default Layout