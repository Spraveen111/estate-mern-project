import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState({});
  const [error,setError] =useState(null)
  const [isLoading,setLoading]=useState(false)
  const navigate=useNavigate();
  const handleChange = (e) => {
    setSignUpFormData({
      ...signUpFormData,
      [e.target.id]: e.target.value,
    });
  };


const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpFormData),
      });
      const data = await response.json();
      
      if (data.success===false) {
        setError(data.message)
        setLoading(false)
        return;
      }
      setLoading(false)
      setError(null)
      navigate("/sign-in")
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message)
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className='text-center text-3xl my-7 font-semibold'>Sign Up</h1>
      <form onSubmit={handleSubmitSignUp} className='flex flex-col gap-4'>
        <input type="text"  placeholder='username' className='border p-3 rounded-xl' id="username" onChange={handleChange} />
        <input type="email"  placeholder='email' className='border p-3 rounded-xl' id="email" onChange={handleChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-xl' id="password" onChange={handleChange} />
        <button disabled={isLoading} type="submit" className='bg-slate-700 text-white rounded-lg p-3 hover:opacity-60'>{isLoading ? "Loading..." : "Sign Up"}</button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Have an account ?</p>
        <Link to="/sign-in">
          <span className='text-red-600'>Sign in</span>
        </Link>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
