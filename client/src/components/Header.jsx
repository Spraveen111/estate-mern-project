import {Link} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
   <header className='bg-slate-200 shadow-md'>
    <div className=' flex justify-around items-center  p-3 '>
        <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl lg:text:2xl flex flex-wrap'>
        <span className='text-slate-500'>Praveen</span>
        <span className="text-slate-700">Estate</span>
    </h1>
    </Link>
    <form className='bg-slate-100 rounded-lg p-2 flex items-center'>
        <input type='text' placeholder='searching' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className="text-slate-700"/>
    </form>
    <ul className="flex gap-3 ">
        <Link to='/'>
        <li className="hidden sm:block hover:underline">Home</li>
        </Link>
        <Link to='/about'>
        <li className="hidden sm:block hover:underline">About</li>
        </Link>
        <Link to='/sign-in'>
        <li className="hidden sm:block hover:underline">Sign in</li>
        </Link>
    </ul>
    </div>
   </header>
  )
}
