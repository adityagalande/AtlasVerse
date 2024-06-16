import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

// components
import Root from './Root.jsx'
import Home from './components/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Country from './components/country/Country.jsx'
import Continent from './components/continent/Continent.jsx'
import ErrorPage from './components/error_page/ErrorPage.jsx'
import Card from './components/card/Card.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="header" element={<Header />} />
      <Route path="footer" element={<Footer />} />
      <Route path="country" element={<Country />} />
      <Route path="continent" element={<Continent />} />
      <Route path='card' element={<Card />}/>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
