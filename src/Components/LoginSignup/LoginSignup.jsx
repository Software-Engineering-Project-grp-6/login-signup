import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import website_icon from "../Assets/website.png";

export const LoginSignup = () => {
    const [action,setAction]= useState("Login");
  return (
    <div className='container'>
    <div className="header">
        <img src={website_icon} alt="Marketplace icon" />
        <div className="text">{action}</div>
            <div className="underline"></div>
    </div>
    <div className="inputs">
    {action==="Login"?<>    <div>
                                <img src={user_icon} alt="Username" />
                                <input type="pattern" placeholder="Username" /> 
                            </div>
                            <div>
                                <img src={password_icon} alt="password" />
                                <input type="password" placeholder='Password' />
                            </div>
                            </>:<div></div>
                          }
    {action==="Sign Up"?<>
                        <div>
                            <img src={user_icon} alt='Username' />
                            <input type='pattern' placeholder='Username' />
                        </div>

                        <div>
                            <img src={email_icon} alt="email" />
                            <input type="email" placeholder='Email' />
                        </div>
                      
                        <div>
                            <img src={password_icon} alt="password" />
                            <input type="password" placeholder='Password' />
                        </div>


                        </>  : <div></div>
        }
        
    <div className="submit-container">
        <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
    </div>
    </div>
  )
}
