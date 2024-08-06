import "./signup.css"
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";



const Signup = () => {


    const navigate = useNavigate()

    const [type, setType] = useState("password")
    const [info, setInfo] = useState({

        username: "",
        email: "",
        password: "",
        cpass: ""
    })

    const { username, email, password } = info



    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const signup = async(e) => {
        e.preventDefault()
        
        if(username.trim() === ""){
            toast.error("Username is required")
        }else if(email.trim() === ""){
            toast.error("Email is required")
        }else if (!email.includes("@gmail.com")){
            toast.error("Please enter a valid email")
        }else if(password.trim() === ""){
            toast.error("Password is required")
        }else if(password.length <= 4){
            toast.error("Password must be at least 4 characters")
        }else{
            const {data} = await axios.post("http://localhost:4000/signup/user", {...info})
               if(data.status === true){
                toast.success(data.msg)
                setTimeout(()=>{
                    navigate("/")
                }, 2000)
               }else{
                toast.error(data.msg)
               }
        }
    }


        return (
            <div className="mainSigninContainer">

                <form className="signinContainer flex-center" onSubmit={signup}>
                    <Toaster position="top-right" richColors />

                    <div className="signin">
                        <h1>Sign Up</h1>
                    </div>

                    <div className="container ">

                        <div className="passContainer">
                            <input type="text" require className="inputReg" name="username" onChange={handleChange} placeholder="Username" />
                        </div>
                        <div className="passContainer">
                            <input type="text" require className="inputReg" name="email" onChange={handleChange} placeholder="Email" />
                        </div>
                        <div className="passContainer">
                        <input type={type} require className="inputReg" placeholder="Password" name="password" onChange={handleChange}/>
                        {type === "password" ? (
                            <span className="eyeLogo" onClick={()=>setType("text")}>
                                <GoEyeClosed size={18}/>
                            </span>
                        ):(
                            <span className="eyeLogo" onClick={()=>setType("password")}>
                                <FiEye size={18}/>
                            </span>
                        )}
                    </div>
                        <div className="hrSpace">
                            <input type="submit" className="inputBtnReg" value="Submit" />
                        </div>

                    </div>


                    <div className=" flex-center gap-5">
                        <div className="hrLine flex-center"></div>

                        <p>or</p>

                        <div className="hrLine flex-center"></div>

                    </div>

                    <div className="iconSection">

                    <div><FaGoogle size={20} />oogle</div>
                    </div>

                    <div className="SignUpIn">
                        <p>Already have an account? <Link to={"/reg"}> <span>Sign In</span> </Link> </p>
                    </div>



                </form>

            </div>

        )
    }

    export default Signup