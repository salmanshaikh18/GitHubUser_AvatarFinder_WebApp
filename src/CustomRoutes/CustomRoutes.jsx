import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

const CustomRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </>
  )
}

export default CustomRoutes