import React from "react";
import { useEffect,useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { useAuth } from "../../Context/Auth/Auth";


function Signup() {
const {signupHandler} = useAuth()
const [newClient,setNewClient] = useState({
firstName:"",
lastName:"",
email:"",
password:""
})

return (
<>
    <div className="h-100">
        <Navbar></Navbar>
        <main>
            <form onSubmit={(e)=>{ e.preventDefault();
            signupHandler(newClient)}
           } className=" box-shadow-1 m-auto m-y-11 wt-30 flex
                flex-column items-center pd-8 ">
                <div className="text-xm text-semi">
                    <span>Sign Up</span>
                </div>
                <div className=" bg-black-0 flex flex-column  m-t-8 wt-100 ">
                    <label for="" className="bg-white-0 ">First Name
                        <input onChange={(e)=>setNewClient({...newClient,firstName:e.target.value})}
                        type="text"
                        placeholder="Anish"
                        className=" rounded-xs pd-3 wt-100 " />
                    </label>
                </div>
                <div className=" bg-black-0 flex flex-column  m-t-8 wt-100 ">
                    <label for="" className="bg-white-0 ">Last Name
                        <input onChange={(e)=>setNewClient({...newClient,lastName:e.target.value})}
                        type="text"
                        placeholder="Kumar"
                        className=" rounded-xs pd-3 wt-100 " />
                    </label>
                </div>
                <div className=" bg-black-0 flex flex-column  m-t-8 wt-100 ">
                    <label for="" className="bg-white-0 ">Email address
                        <input onChange={(e)=>setNewClient({...newClient,email:e.target.value})}
                        type="email"
                        placeholder="saketkumar@gmail.com"
                        className=" rounded-xs pd-3 wt-100 " /></label>
                </div>
                <div className="bg-black-0 flex  flex-column  m-y-4 wt-100">
                    <label for="" className="bg-white-0">Password
                        <input onChange={(e)=>setNewClient({...newClient,password:e.target.value})}
                        type="password"
                        placeholder="***************************"
                        className="rounded-xs pd-3 wt-100" /></label>
                </div>
                <div className="flex  text-s m-y-4 justify-btw wt-100 flex-wrap">
                    <div className="flex items-center   ">
                        <input type="checkbox" className="m-x-2" name="" id="" />
                        <label for="">I accept all Term & Conditions.</label>
                    </div>


                </div>
                <div className="wt-100">
                    <button type="submit"
                        className="cursor bg-red-7 text-color-0 text-xm outline-none border-none pd-x-11 pd-y-3 rounded-xs wt-100">Sign
                        Up</button>
                </div>
                <div className="m-y-3">
                    <a href="/component/login/login.html" target="_blank" className="text-dec text-color-9">Already have
                        account?</a>
                </div>
            </form>
        </main>
    </div>

</>
);
}

export default Signup;