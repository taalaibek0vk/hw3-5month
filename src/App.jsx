import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import UserListPage from './pages/UserListPage'
import NotFoundPage from './pages/NotFoundPage'
import UserInfoPage from './pages/UserInfoPage'

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ <MainPage/>} />
          <Route path='/list' element={<UserListPage />} />
          <Route path='/info' element={<UserInfoPage />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
    </Routes>
    </>
  )
}

