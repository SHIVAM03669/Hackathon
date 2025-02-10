import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (email, password, role) => {
    // In a real app, you would validate credentials with an API
    setUser({ email, role })
    
    // Redirect based on role
    switch (role) {
      case 'student':
        navigate('/student-dashboard')
        break
      case 'faculty':
        navigate('/faculty-dashboard')
        break
      case 'admin':
        navigate('/admin-dashboard')
        break
      case 'alumni':
        navigate('/alumni-dashboard')
        break
      default:
        navigate('/')
    }
  }

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)