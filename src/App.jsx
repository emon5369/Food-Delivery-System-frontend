import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
    </AuthProvider>
  )
}

export default App
