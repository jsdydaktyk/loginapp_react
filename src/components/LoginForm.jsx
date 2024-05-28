import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"



const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate(); 

    function handleSubmit(e){
        e.preventDefault()

        console.log(`${userName}, ${password}`)
        if(userName == "tom" && password==="123"){
            navigate("/welcome", {state: {userName, password}})
        } else {
            setError("Invalid user name or password")
        }

    }

    return (
        <> 
            <form onSubmit={handleSubmit}>
                <div>
                    <label>user name:</label>
                    <input 
                        type="text"
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>password:</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <button type="submit"> Login </button>
            </form>
        
        </>
    )
}

export default LoginForm