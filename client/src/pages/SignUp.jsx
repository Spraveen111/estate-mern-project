import React from 'react'
import {Link} from "react-router-dom"
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className='text-center text-3xl my-7 font-semibold'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-xl' id="username"/>
        <input type="email" placeholder='email' className='border p-3 rounded-xl' id="email"/>
        <input type="password" placeholder='password' className='border p-3 rounded-xl' id="password"/>
    <button className='bg-slate-700 text-white rounded-lg p-3 hover:opacity-60'>Sign Up</button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Have an account ?</p>
        <Link to ={"/sign-in"}>
        <span className='text-red-600 '>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
