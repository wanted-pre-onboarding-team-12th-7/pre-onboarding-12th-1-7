import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './Home'
import Todo from './Todo'
import Signin from './Signin'
import Signup from './Signup'

interface RouteProps {
  isAuth: string | null
  children: JSX.Element
}

function ProtectedRoute({ isAuth, children }: RouteProps) {
  return isAuth ? children : <Navigate to="/signin" replace />
}
function PublicRoute({ isAuth, children }: RouteProps) {
  return isAuth ? <Navigate to="/todo" replace /> : children
}

function PageRouter() {
  const isAuth = localStorage.getItem('access_token')

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Todo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute isAuth={isAuth}>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute isAuth={isAuth}>
              <Signup />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
