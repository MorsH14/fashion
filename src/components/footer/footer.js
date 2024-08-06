import "./footer.css"
import { FaInstagram } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";







const Footer =()=>{
    return(
        <div className="footerContainer">

        <div className="footerContent flex-around">
            
            <div className="around flex-column">
                <div className="">
                    <img src="./assets/mclth.png" alt="" width={100}/>
                </div>

                <div className="contactLogo flex-center gap-10">

                    <div>
                    <FaFacebookSquare size={25} color="blue"/>
                    </div>

                    <div>
                    <FaInstagram size={25} color="red"/>
                    </div>
                    <a href="https://Wa.me//+2349038662876"><div>
                    <FaWhatsapp size={25} color="green"/>
                    </div>
                    </a>
                </div>
            </div>

            <div className="contactContainer flex-center flex-column c-pointer">

                <div className="">
                    <h3>Contact me</h3>
                </div>

                <div className="homeAddress flex-center gap-10">
                <GoHome size={30}/>
                    <p>No 24 talowami street, along who are you taiwo, ilorin, kwara state</p>
                </div>
                <div className=" flex-center gap-10">
                <CiMail size={20}/>
                    <p>midemorsh@gmail.com</p>
                </div>
                <div className=" flex-center gap-10">
                <IoMdCall size={20}/>
                    <p>09038662876</p>
                </div>
            </div>

            <div className="none c-pointer">
                <h3>Products</h3>
                <div>
                    <p>Suits</p>
                    <p>Agbada</p>
                    <p>Kaftans</p>
                </div>
            </div>
            <div className="none c-pointer">
                <h3>lists</h3>
                <div>
                    <p>About</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                </div>
            </div>

        </div>
            <div className="reservedContainer flex-center">
                <div className="hrLine"></div>
            <p>@morsh ©2024 All Rights Reserved</p>
            <div className="hrLine"></div>
            </div>
        </div>

        
    )
}


export default Footer