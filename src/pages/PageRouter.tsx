import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './Home'
import Todo from './Todo'
import Signin from './Signin'
import Signup from './Signup'
import NotFound from './NotFound'
import { useAuthContext } from '../AuthProvider'

interface RouteProps {
  fallback: string
  children: JSX.Element
}

function ProtectedRoute({ fallback, children }: RouteProps) {
  const { token } = useAuthContext()
  return token ? children : <Navigate to={fallback} replace />
}

function PublicRoute({ fallback, children }: RouteProps) {
  const { token } = useAuthContext()
  return token ? <Navigate to={fallback} replace /> : children
}

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute fallback="/signin">
              <Todo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute fallback="/todo">
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute fallback="/todo">
              <Signup />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
