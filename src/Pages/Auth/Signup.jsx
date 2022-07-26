import React from 'react';
import { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { useAuth } from '../../Context/Auth/Auth';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const { signupHandler, loader, setLoader } = useAuth();

  const [newClient, setNewClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  return (
    <>
      <div className='h-100'>
        <Navbar></Navbar>
        <main>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              signupHandler(newClient);
              navigate('/login');
            }}
            className=' box-shadow-1 m-auto m-y-11 wt-30 flex
                flex-column items-center pd-8 '
          >
            <div className='text-xm text-semi'>
              <span>Sign Up</span>
            </div>
            <div className=' bg-black-0 flex flex-column  m-t-8 wt-100 '>
              <label for='firstName' className='bg-white-0 '>
                First Name
                <input
                  onChange={() =>
                    setNewClient({ ...newClient, firstName: 'Adarsh' })
                  }
                  type='text'
                  required
                  id='firstName'
                  value={newClient.firstName}
                  placeholder='Anish'
                  className=' rounded-xs pd-3 wt-100 '
                />
              </label>
            </div>
            <div className=' bg-black-0 flex flex-column  m-t-8 wt-100 '>
              <label for='lastName' className='bg-white-0 '>
                Last Name
                <input
                  onChange={() =>
                    setNewClient({ ...newClient, lastName: 'Balika' })
                  }
                  type='text'
                  required
                  id='lastName'
                  value={newClient.lastName}
                  placeholder='Kumar'
                  className=' rounded-xs pd-3 wt-100 '
                />
              </label>
            </div>
            <div className=' bg-black-0 flex flex-column  m-t-8 wt-100 '>
              <label for='email' className='bg-white-0 '>
                Email address
                <input
                  onChange={() =>
                    setNewClient({
                      ...newClient,
                      email: 'adarshbalika@gmail.com',
                    })
                  }
                  type='email'
                  required
                  id='email'
                  value={newClient.email}
                  placeholder='saketkumar@gmail.com'
                  className=' rounded-xs pd-3 wt-100 '
                />
              </label>
            </div>
            <div className='bg-black-0 flex  flex-column  m-y-4 wt-100'>
              <label for='password' className='bg-white-0'>
                Password
                <input
                  onChange={() =>
                    setNewClient({ ...newClient, password: 'adarshbalika' })
                  }
                  type='password'
                  required
                  id='password'
                  value={newClient.password}
                  placeholder='eg.saket&098'
                  className='rounded-xs pd-3 wt-100'
                />
              </label>
            </div>
            <div className='flex  text-s m-y-4 justify-btw wt-100 flex-wrap'>
              <div className='flex items-center   '>
                <input
                  type='checkbox'
                  className='m-x-2'
                  name='checkbox'
                  id='checkbox'
                />
                <label for='checkbox'>I accept all Term & Conditions.</label>
              </div>
            </div>
            <div className='wt-100'>
              <button
                type='submit'
                className='cursor bg-red-7 text-color-0 text-xm outline-none border-none pd-x-11 pd-y-3 rounded-xs wt-100'
              >
                Sign Up
              </button>
            </div>
            <div className='m-y-3'>
              <Link to='/login' className='text-dec text-color-9'>
                Already have account?
              </Link>
            </div>
            {loader && <h4>Loading You data .....</h4>}
          </form>
        </main>
      </div>
    </>
  );
}

export default Signup;
