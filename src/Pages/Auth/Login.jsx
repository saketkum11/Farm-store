import React from "react"
import Navbar from "../../Component/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/Auth/Auth";
import { useNavigate } from 'react-router-dom';
function Login() {


const {fetchLoginDetails} = useAuth();
const [newClient,setNewClient] = useState({email:"",password:""})

const navigate = useNavigate();

return (
<>
    <main>

        <Navbar></Navbar>
        <section className=" box-shadow-1 m-auto m-y-11  wt-30 flex flex-column items-center pd-8 ">
            <div className="text-xm text-semi">
                <span>Login</span>
            </div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                fetchLoginDetails(newClient.email,newClient.password)
                ;
                navigate("/")
                }}>
                <div className=" bg-black-0 flex flex-column  m-t-8 wt-100 ">
                    <label for="email" className="bg-white-0 "> Email address
                        <input onChange={()=>setNewClient({...newClient,email:"adarshbalika@gmail.com"})}
                        type="email"
                        placeholder="saketkumar@gmail.com"
                        className=" rounded-xs pd-3 wt-100 "
                        id="email" />
                    </label>
                </div>
                <div className="bg-black-0 flex  flex-column  m-y-4 wt-100">
                    <label for="password" className="bg-white-0">Password</label>
                    <input onChange={()=>setNewClient({...newClient,password:"adarshbalika"})}
                    type="password"
                    placeholder="***************************"
                    className="rounded-xs pd-3 wt-100" 
                    id="password"/>
                </div>
                <div className="flex  text-s m-y-4 justify-btw wt-100 flex-wrap">
                    <div className="flex items-center   ">
                        <input type="checkbox" className="m-x-2" name="" id="checkout" />
                        <label for="checkout">Remember me</label>
                    </div>
                    <div className="">
                        <Link to="/forgot" className="text-dec color-red-7">Forgot your password?</Link>
                       
                    </div>

                </div>
                <div className="wt-100">
                    <button type="submit" onClick={()=> fetchLoginDetails("adarshbalika@gmail.com","adarshbalika")}
                        className="cursor bg-red-7 text-color-0 text-xm outline-none border-none pd-x-11 pd-y-3
                        rounded-xs wt-100">Login</button>
                </div>
            </form>
            <div className="m-y-3">
                <Link to="/signup" target="_blank" className="text-dec text-color-9">Create New
                Account</Link>

            </div>
        </section>

    </main>
</>
);
}

export default Login;