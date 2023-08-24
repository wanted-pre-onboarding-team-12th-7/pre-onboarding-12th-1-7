import { useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './Home'
import Todo from './Todo'
import Signin from './Signin'
import Signup from './Signup'
import NotFound from './NotFound'

interface RouteProps {
  token: string | null
  fallback: string
  children: JSX.Element
}

function ProtectedRoute({ token, fallback, children }: RouteProps) {
  return token ? children : <Navigate to={fallback} replace />
}
function PublicRoute({ token, fallback, children }: RouteProps) {
  return token ? <Navigate to={fallback} replace /> : children
}

function PageRouter() {
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setToken('')
      return
    }
    setToken(JSON.stringify(localStorage.getItem('accessToken')))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute token={token} fallback="/signin">
              <Todo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute token={token} fallback="/todo">
              <Signin setToken={setToken} />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute token={token} fallback="/todo">
              <Signup setToken={setToken} />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
