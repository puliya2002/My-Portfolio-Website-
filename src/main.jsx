import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import heroImage from './assets/me.webp'

const preload = document.createElement('link')
preload.rel = 'preload'
preload.as = 'image'
preload.href = heroImage
preload.fetchPriority = 'high'
document.head.appendChild(preload)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
)
