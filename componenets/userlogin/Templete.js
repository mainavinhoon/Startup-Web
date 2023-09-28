import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
const Templete = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

        {formtype === "signup" ? (<SignUpForm/>):(<LoginForm/>)}

        <button>Sign Up with Google </button>
    </div>

  )
}

export default Templete