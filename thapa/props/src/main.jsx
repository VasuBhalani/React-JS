import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {Practices} from './Practice.jsx'
import {Card} from './Card.jsx'
import Profile from './Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Practices/> */}
    {/* <Card/> */}
    <Profile/>
  </StrictMode>,
)
