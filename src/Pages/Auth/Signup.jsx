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
            className=' box-shadow-1 m-auto m-y-11  flex
                flex-column items-center pd-8 wt-max-20 '
          >
            <div className=' flex flex-column gap-2'>
              <div className='text-xm text-semi'>
                <span>Sign Up</span>
              </div>
              <div className=' '>
                <input
                  onChange={() =>
                    setNewClient({ ...newClient, firstName: 'Adarsh' })
                  }
                  type='text'
                  required
                  id='firstName'
                  value={newClient.firstName}
                  placeholder='firstName'
                  className=' pd-4 wt-100 border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9'
                />
              </div>
              <div className='    '>
                <input
                  onChange={() =>
                    setNewClient({ ...newClient, lastName: 'Balika' })
                  }
                  type='text'
                  required
                  id='lastName'
                  value={newClient.lastName}
                  placeholder='Last Name'
                  className='wt-100  pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9'
                />
              </div>
              <div className='    '>
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
                  placeholder='email id'
                  className='wt-100  pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9'
                />
              </div>
              <div className='  '>
                <input
                  onChange={() =>
                    setNewClient({ ...newClient, password: 'adarshbalika' })
                  }
                  type='password'
                  required
                  id='password'
                  value={newClient.password}
                  placeholder='password'
                  className='wt-100  pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9'
                />
              </div>
              <div className='wt-100'>
                <button
                  type='submit'
                  className='cursor bg-green-8 text-color-grey-0 text-xm  pd-x-11 pd-y-3
                        rounded-xs '
                >
                  Sign Up
                </button>
              </div>
              <div className='m-y-3'>
                <Link to='/login' className='cursor text-dec text-color-grey-9'>
                  Already have account?
                </Link>
              </div>
              {loader && <h4>Loading You data .....</h4>}
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Signup;
