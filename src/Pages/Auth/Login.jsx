import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../Context/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function Login() {
  const { fetchLoginDetails } = useAuth();
  const [newClient, setNewClient] = useState({ email: '', password: '' });

  const handleForm = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  return (
    <>
      <main>
        <Navbar></Navbar>
        <section className=' box-shadow-1 m-auto m-y-11  wt-30 flex flex-column items-center pd-8 '>
          <div className='text-xm text-semi'>
            <span>Login</span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchLoginDetails(newClient.email, newClient.password);
              navigate('/');
            }}
          >
            <div className=' bg-black-0 flex flex-column  m-t-8 wt-100 '>
              <label for='email' className='bg-white-0 '>
                Email address
                <input
                  onChange={(e) => handleForm(e)}
                  type='email'
                  placeholder='saketkumar@gmail.com'
                  className=' rounded-xs pd-3 wt-100 '
                  id='email'
                  name='email'
                  value={newClient.email}
                />
              </label>
            </div>
            <div className='bg-black-0 flex  flex-column  m-y-4 wt-100'>
              <label for='password' className='bg-white-0'>
                Password
              </label>
              <input
                onChange={(e) => handleForm(e)}
                type='password'
                placeholder='***************************'
                className='rounded-xs pd-3 wt-100'
                id='password'
                name='password'
              />
            </div>
            <div className='flex  text-s m-y-4 justify-btw wt-100 flex-wrap'>
              <div className='flex items-center   '>
                <input
                  type='checkbox'
                  className='m-x-2'
                  name='checkout'
                  id='checkout'
                  value={newClient.password}
                />
                <label for='checkout'>Remember me</label>
              </div>
            </div>
            <div className='wt-100'>
              <button
                type='submit'
                className='cursor bg-red-7 text-color-0 text-xm outline-none border-none pd-x-11 pd-y-3
                        rounded-xs wt-100'
              >
                Login
              </button>
            </div>
          </form>
          <div className='m-y-3'>
            <button
              onClick={() => {
                fetchLoginDetails('adarshbalika@gmail.com', 'adarshbalika');
                toast.success('SuccessFully loggedIn');
                navigate('/');
              }}
              className='cursor bg-red-7 text-color-0 text-xm outline-none border-none pd-x-11 pd-y-3
                        rounded-xs wt-100'
            >
              Login As Guest
            </button>
            <Link to='/signup' className='text-dec text-color-9'>
              Create New Account
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
