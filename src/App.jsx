import { useState } from 'react'
import './App.css'
import { Route, Routes,useNavigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import WelcomePage from './pages/WelcomePage'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
     <h4>Aby się zalogować kliknij batona</h4>
     <button onClick={()=>navigate('/login')}>Klik</button>
     <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
     </Routes>
    </>
  )
}

export default App
