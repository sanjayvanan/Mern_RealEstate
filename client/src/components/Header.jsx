import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <div className='flex items-center'>
            <img 
              src='https://img.icons8.com/?size=100&id=00NRml63UH6j&format=png&color=000000' 
              alt='icon' 
              className='h-6 w-6 mr-2'
            />
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
              <span className='text-slate-500'>Sanjay</span>
              <span className='text-slate-700'>Estate</span>
            </h1>
          </div>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/sign-in'>
            <li className=' text-slate-700 hover:underline'> Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
