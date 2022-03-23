import React from "react"
import Navbar from "../../Component/Navbar/Navbar";

function Login() {
    return (
      <>
      <main>
  
          <Navbar></Navbar>
          <section class=" box-shadow-1 m-auto m-y-11  wt-30 flex flex-column items-center pd-8 ">
              <div class="text-xm text-semi">
                  <span>Login</span>
              </div>
              <div class=" bg-black-0 flex flex-column  m-t-8 wt-100 ">
                  <label for="" class="bg-white-0 ">Email address</label>
                  <input type="email" placeholder="saketkumar@gmail.com" class=" rounded-xs pd-3 wt-100 " />
              </div>
              <div class="bg-black-0 flex  flex-column  m-y-4 wt-100">
                  <label for="" class="bg-white-0">Password</label>
                  <input type="password" placeholder="***************************" class="rounded-xs pd-3  wt-100" />
              </div>
              <div class="flex  text-s m-y-4 justify-btw wt-100 flex-wrap">
                  <div class="flex items-center   ">
                      <input type="checkbox" class="m-x-2" name="" id="" />
                      <label for="">Remember me</label>
                  </div>
                  <div class="">
                      <a href="#" class="text-dec color-red-7">Forgot your password?</a>
                  </div>
  
              </div>
              <div class="wt-100">
                  <button
                      class="cursor bg-red-7 text-color-0 text-xm outline-none border-none pd-x-11 pd-y-3 rounded-xs wt-100">Login</button>
              </div>
              <div class="m-y-3">
                  <a href="/component/signup/signup.html" target="_blank" class="text-dec text-color-9">Create New
                      Account</a>
              </div>
          </section>
      </main>
  </>
    );
  }
  
  export default Login;