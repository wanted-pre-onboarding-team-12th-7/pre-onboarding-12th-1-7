import { useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './Home'
import Todo from './Todo'
import Signin from './Signin'
import Signup from './Signup'

interface RouteProps {
  isAuth: string | null
  fallback: string
  children: JSX.Element
}

function ProtectedRoute({ isAuth, fallback, children }: RouteProps) {
  return isAuth ? children : <Navigate to={fallback} replace />
}
function PublicRoute({ isAuth, fallback, children }: RouteProps) {
  return isAuth ? <Navigate to={fallback} replace /> : children
}

function PageRouter() {
  const [isAuth, setIsAuth] = useState<string>('')
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      setIsAuth('')
      return
    }
    setIsAuth(JSON.stringify(localStorage.getItem('access_token')))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute isAuth={isAuth} fallback="/signin">
              <Todo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute isAuth={isAuth} fallback="/todo">
              <Signin setIsAuth={setIsAuth} />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute isAuth={isAuth} fallback="/todo">
              <Signup setIsAuth={setIsAuth} />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
