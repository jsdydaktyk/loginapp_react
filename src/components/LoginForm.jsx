import { useState } from "react"
import axios from "axios"



const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        console.log(`${userName}, ${password}`)

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
                <button type="submit"> Login </button>
            </form>
        
        </>
    )
}

export default LoginForm