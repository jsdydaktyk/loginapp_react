import { useLocation } from "react-router-dom"

const Welcome = () => {
    const location = useLocation()
    const {userName, password} = location.state || {userName:'', password:''}

    return (
        <>
            <h1>Welcome !!!</h1>
            <p> user name: {userName} </p>
            <p>your password: {password}</p>
        </>
 
    )
}

export default Welcome 