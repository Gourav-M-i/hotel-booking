import React, { useContext, useState } from 'react'
import './Login.css'
import { AuthContext } from '../../context/AythContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })
    const { loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const response = await axios.post("/api/auth/login", credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
            navigate("/")
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    }
    return (
        <div className='login'>
            <div className='lContainer'>
                <input type='text' placeholder='username' className='lInput' id='username' onChange={handleChange} />
                <input type='password' placeholder='password' className='lInput' id='password' onChange={handleChange} />
                <button disabled={loading} className='lButton' onClick={handleClick}>Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login
