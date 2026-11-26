import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './App.css'
import App from './App.jsx'
import router from './router.jsx'
import { CartProvider } from './Contexts/CartContext.jsx'
import { ThemeContext } from './Contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ThemeContext>

)