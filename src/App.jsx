import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import WelcomePage from './pages/WelcomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Aby się zalogować kliknij batona</h1>
     <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
     </Routes>
    </>
  )
}

export default App
