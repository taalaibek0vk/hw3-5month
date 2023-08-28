import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Главная</NavLink>
          </li>
          <li>
            <NavLink to={"/list"}>Список пользователей</NavLink>
          </li>
          <li>
            <NavLink to={"/info"}>Информация о пользователе</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar