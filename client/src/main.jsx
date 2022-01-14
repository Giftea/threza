import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


import { TransactionsProvider } from './context/TransactionContext'
import { NewsProvider } from './context/NewsContext'


ReactDOM.render(
  <TransactionsProvider>
    <NewsProvider>
      <React.StrictMode>
            <App />
        </React.StrictMode>
    </NewsProvider>
  </TransactionsProvider>,
  document.getElementById('root')
)
