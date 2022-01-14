import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import News from './pages/News'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TransactionsProvider } from './context/TransactionContext'
import { NewsProvider } from './context/NewsContext'


ReactDOM.render(
  <BrowserRouter>
    <TransactionsProvider>
    <NewsProvider>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/News' element={<News/>} />
      </Routes>
    </NewsProvider>
  </TransactionsProvider>
  </BrowserRouter>
,
  document.getElementById('root')
)
