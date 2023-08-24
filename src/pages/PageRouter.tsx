import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './Home'
import Todo from './Todo'
import Signin from './Signin'
import Signup from './Signup'

interface PublicRouteProps {
  isSignIn: boolean
}

function PageRouter() {
  const isAuth = localStorage.getItem('access_token')

  function ProtectedRoute() {
    return isAuth ? <Todo /> : <Navigate to="/signin" />
  }
  function PublicRoute({ isSignIn }: PublicRouteProps) {
    return isAuth ? <Navigate to="/todo" /> : isSignIn ? <Signin /> : <Signup />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todo" element={<ProtectedRoute />} />
        <Route path="/signin" element={<PublicRoute isSignIn={true} />} />
        <Route path="/signup" element={<PublicRoute isSignIn={false} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
