import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import "./contact.css"
import { FaInstagram } from "react-icons/fa6"
// import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";



const Contact = () => {
    return (
        <div className="">

            <Nav />

            <div className="myContactContainer">
                <div className="contactMainContainer">

                    <div className="imgContentContainer">

                    </div>

                    <div className="contactContent">

                        <div className="">
                            <h2>Get In Touch</h2>
                            <p>Have a question? Our team is always ready to help. Feel free reach us anytime, we'll be glad to have you in our atelier.</p>
                        </div>

                        <div className="">
                            <div className=" flex-center">
                                <h3> <CiMail /> Email:<a href="mailto: midemorsh@gmail.com">midemorsh@gmail.com</a></h3>

                            </div>

                            <div className=" flex-center">
                                <h3> <IoMdCall /> Phone Number:<span>09038662876</span></h3>
                            </div>

                            <div className=" flex-center">
                                <h3> <GoHome /> Office Address:<span>No 24 Taiwo street, Ilorin,  Kwara start, Nigeria.</span></h3>
                            </div>


                            <div className="linkContactContainer">

                                {/* <div>
                                    <FaFacebookSquare size={30} color="blue" />
                                </div> */}

                                <a href="https://www.instagram.com/morshdev">
                                    <FaInstagram size={30} color="red" />
                                </a>
                                <a href="https://Wa.me//+2349038662876"><div>
                                    <FaWhatsapp size={25} color="green" />
                                </div>
                                </a>
                            </div>
                        </div>



                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}


export default Contact