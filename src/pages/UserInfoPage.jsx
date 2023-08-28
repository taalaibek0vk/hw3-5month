import React from 'react'
import { useParams, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api'

const UserInfoPage = () => {
  const [user, setUser] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    api.get(`/users/${id}`).then((resp) => setUser(resp.data))
  }, [id])
  return (
    <div>
      <button onClick={() => navigate(`/users/${id}/posts`, { replace: true })}>Посты</button>
      <h3>{user.firstName}</h3>
      <p>{user.email}</p>
      <button onClick={() => navigate(`/users/${id}/todos`, { replace: true })}>Список дел</button>
      <Outlet />
    </div>
  )
}

export default UserInfoPage