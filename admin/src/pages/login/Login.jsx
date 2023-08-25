import React, { useContext, useState } from 'react'
import './Login.scss'
import { AuthContext } from '../../context/AuthContext'
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
            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            }
            const response = await axios.post("http://localhost:8800/api/auth/login", credentials, config)
            console.log(response, credentials)
            if (response.data.isAdmin) {
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data.details })
                navigate("/")
            }
            else {
                dispatch({ type: "LOGIN_FAILURE", payload: { message: "You are not allowed" } })
            }
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
