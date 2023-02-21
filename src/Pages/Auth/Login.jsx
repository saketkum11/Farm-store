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
      <Navbar />
      <main>
        <div className=' '>
          <div className='m-auto flex flex-column gap-1 box-shadow-2 pd-11 wt-50 width-scaled4-7'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchLoginDetails(newClient.email, newClient.password);
                navigate('/');
              }}
            >
              <div className='width-max-100 flex flex-column gap-2'>
                <div className='flex flex-column items-center gap-1'>
                  <label for='email' className=' '>
                    Email address
                  </label>
                  <input
                    onChange={(e) => handleForm(e)}
                    type='email'
                    placeholder='saketkumar@gmail.com'
                    className='width-scaled4-5 pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9'
                    id='email'
                    name='email'
                    value={newClient.email}
                  />
                </div>
                <div className=' flex flex-column items-center gap-1 '>
                  <label for='password' className=''>
                    Password
                  </label>
                  <input
                    onChange={(e) => handleForm(e)}
                    type='password'
                    placeholder='***************************'
                    className=' pd-4 border-1 width-scaled4-5 border-solid border-black-700 text-s rounded-s text-color-grey-9 '
                    id='password'
                    name='password'
                    value={newClient.password}
                  />
                </div>

                <div className='flex items-center justify-center width-max-100'>
                  <button
                    type='submit'
                    className='cursor bg-green-8 text-color-grey-0 text-xm width-scaled4-4  pd-x-11 pd-y-3
                        rounded-xs '
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
            <div className='flex flex-column justify-center items-center  gap-1'>
              <button
                onClick={() => {
                  fetchLoginDetails('adarshbalika@gmail.com', 'adarshbalika');
                  toast.success('SuccessFully loggedIn');
                  navigate('/');
                }}
                className='cursor bg-green-8 text-color-grey-0 text-xm  border-none pd-x-11 pd-y-3 rounded-xs  '
              >
                Login As Guest
              </button>
              <Link
                to='/signup'
                className='cursor text-color-grey-9 text-xm  border-none pd-x-11 pd-y-3 '
              >
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
