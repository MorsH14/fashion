import "./reg.css"
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";





const Registration = () => {


    const navigate = useNavigate()

    const [type, setType] = useState("password")
    const [info, setInfo] = useState({

        username:"",
        password:""
    })


    const { username, password } = info

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
        console.log({...info, [e.target.name]: e.target.value})
    }

    const login = async(e)=>{

        e.preventDefault()

        if(username.trim() === ""){
            toast.error("Please enter a username")
        }else if(password.trim() === ""){
            toast.error("Please enter a password") 
        }else if(password.length <= 4){
            toast.error("Password must be more than 4 characters")
        }else{
            const {data} = await axios.post("http://localhost:5000/login/user", {username, password})

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

            <form className="signinContainer flex-center" onSubmit={login}>
                <Toaster position="top-right" richColors/>

                <div className="signin">
                    <h1>Sign in</h1>
                </div>

                <div className="container ">

                    <div className="passContainer">
                        <input type="text" require className="inputReg" placeholder="Username or Email" name="username" onChange={handleChange}/>
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
                        <input type="submit" require className="inputBtnReg" placeholder="Submit" />
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
                    <p>Don't have an account? <Link to={"/signup"}> <span>Sign up</span> </Link></p>
                </div>


            </form>

        </div>

    )
}


export default Registration