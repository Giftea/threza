import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TransactionsProvider } from './context/TransactionContext'
import { NewsProvider } from './context/NewsContext'
import { CryptoProvider } from './context/CryptoContext'
import App from './App'
import News from './pages/News'
import Exchanges from './pages/Exchanges'
import Cryptocurrencies from './pages/Cryptocurrencies'



ReactDOM.render(
  <BrowserRouter>
    <TransactionsProvider>
    <NewsProvider>
      <CryptoProvider>
      <Routes>
        <Route path='/' element={<App/>}/ >
          <Route path='/News' element={<News/>} />
          <Route path='/Exchanges' element={<Exchanges/>} />
          <Route path='/Cryptocurrencies' element={<Cryptocurrencies/>} />
      </Routes>
      </CryptoProvider>
    </NewsProvider>
  </TransactionsProvider>
  </BrowserRouter>
,
  document.getElementById('root')
)
