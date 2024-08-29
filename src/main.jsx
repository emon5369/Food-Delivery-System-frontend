import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Categories from './pages/Categories.jsx'
import Foods from './pages/Foods.jsx'
import CategoryFoods from './pages/CategoryFoods.jsx'
import Cart from './pages/Cart.jsx'
import ProceedOrder from './pages/ProceedOrder.jsx'
import ContactUs from './pages/Contact.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='categories' element={<Categories />} />
      <Route path='categories/:categoryId' element={<CategoryFoods />} />
      <Route path='foods' element={<Foods />} />
      <Route path='cart' element={<Cart />} />
      <Route path='proceedOrder' element={<ProceedOrder />} />
      <Route path='contact' element={<ContactUs />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
