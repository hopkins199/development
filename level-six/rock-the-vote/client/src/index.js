import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import './css/style.css'
import UserProvider from './context/UserProvider.js'
import IssueProvider from './context/IssueProvider.js'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <IssueProvider>
        <App/>
      </IssueProvider>
    </UserProvider>
  </BrowserRouter>, 
  document.getElementById('root')
)

