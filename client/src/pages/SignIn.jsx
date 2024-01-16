import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function SignIn() {
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
      const response = await fetch('/api/auth/signin', {
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
      navigate("/")
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message)
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className='text-center text-3xl my-7 font-semibold'>Sign In</h1>
      <form onSubmit={handleSubmitSignUp} className='flex flex-col gap-4'>
         <input type="email"  placeholder='email' className='border p-3 rounded-xl' id="email" onChange={handleChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-xl' id="password" onChange={handleChange} />
        <button disabled={isLoading} type="submit" className='bg-slate-700 text-white rounded-lg p-3 hover:opacity-60'>{isLoading ? "Loading..." : "Sign in"}</button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Dont Have an account ?</p>
        <Link to="/sign-up">
          <span className='text-red-600'>Sign up</span>
        </Link>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
