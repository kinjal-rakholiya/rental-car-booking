import React from 'react'
import ReactDOM from 'react-dom'
import CarBookingContextProvider from './contexts/CarBookingContextProvider'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <CarBookingContextProvider>
      <App />
    </CarBookingContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
