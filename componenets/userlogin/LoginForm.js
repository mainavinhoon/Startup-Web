import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai"

const LoginForm = () => {

    const [FormData, setFormData] = useState({
        email:"",password:""
    })
    function changeHandler(event) {
        setFormData( (prevData) => (
            {
            ... prevData,
            [event.target.name]:event.target.value
        }
        ))
    }

    const [showPassword, setshowPassword] = useState(false)
  return (
    <form>
        <label>
            <p>
                Email Adress<sup>*</sup>
            </p>
            <input

                required
                type="email"
                value={FormData.email}
                onChange={changeHandler}
                placeholder="Enter Email Id"
                name="email"
            />
        </label>
        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input

                required
                type={showPassword ? ("text"):("password")}
                value={FormData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
            />
            <span onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
            </span>
        </label>
        <button>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm