import React from "react";
import { useNavigate } from "react-router-dom";
import './Nav.css'
import image from '../Header/health-logo.png'
import profile from '../Header/person-circle.svg'

export default function Header() {
    const navigate=useNavigate();

  return (
    <div className="Header">
        <img className="Header_Logo" src={image} alt="Logo" width="300"></img>

        <div className="Header_nav">
            <div className="HeaderOption">
                    <button className="profile-pic"><img src={profile} alt="profile-pic"></img></button>
                    <button className="LogOut button-logout" onClick={()=>{
                        localStorage.removeItem('token')
                        navigate('/')
                    }}>
                    Logout
                    </button>
            </div>
        </div>
    </div>
  )
}
