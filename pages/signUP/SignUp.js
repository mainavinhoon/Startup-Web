import React from 'react'
import Templete from '@/componenets/userlogin/Templete'
const SignUp = (setIsLoggedIn) => {
  return (
    <>
    <div className='w-[fix fit-content] bg-[blueviolet] relative text-center text-[150px] rounded-[10px]'>Sign Up page</div>
    <Templete

    title="Welcome to the Unite Up Community"
    desc1="You are at the Sign Up page of UniteUp"
    desc2="Enter Your SignUp Details"
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}


    />
    </>
  )
}

export default SignUp