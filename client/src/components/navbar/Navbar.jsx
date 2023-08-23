import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from '../../context/AythContext'
const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'none', fontSize: '30px', fontWeight: 'bold' }}><span className='logo'>BOOKING</span></Link>
                {user ? user.username : <div className='navItems'>
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>}
            </div>
        </div>
    )
}

export default Navbar
