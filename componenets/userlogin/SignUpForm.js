"use client"
import React ,{ useState }from "react";
import {AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai"

const SignUpForm = () => {
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setshowPassword] = useState(false)
  return (
    <div>
      <div>
        <button>As Individual</button>
        <button>As Company</button>
        <form>
          <div>
            <label>
              <p>
                First Name<sup>*</sup>
              </p>
              <input
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={FormData.firstname}
              />
            </label>

            <label>
              <p>
                Last Name<sup>*</sup>
              </p>
              <input
                required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={FormData.lastnametname}
              />
            </label>
          </div>
          <label>
            <p>
              Email <sup>*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Your Email"
              value={FormData.email}
            />
          </label>

          <div>
          <label>
            <p>
                Create Password<sup>*</sup>
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
        <label>
            <p>
               Confirm Password<sup>*</sup>
            </p>
            <input

                required
                type={showPassword ? ("text"):("password")}
                value={FormData.confirmPassword}
                onChange={changeHandler}
                placeholder="Confirm Password"
                name="confirmPassword"
            />
            <span onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
            </span>
        </label>
          </div>
          <button>
            Create Account
        </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
