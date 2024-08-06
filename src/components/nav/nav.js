import { Link } from "react-router-dom";
import "./nav.css"
// import { TiShoppingCart } from "react-icons/ti";
import { LuMenuSquare } from "react-icons/lu";
import { useState } from "react";






const Nav = () => {

    const[isShow, setIsShow] = useState(false)


    const showMenu = ()=>{
        setIsShow(!isShow)
    }



    return (
        <div className="">


            <nav className="navContainer flex-between">
            <Link to={"/"} className="">
                    <img src="./assets/mclth.png" alt="" className="logoContainer" width="100" />
                </Link>

                <div>
                    <ul className={isShow ? "showNav" : "navLinkContainer flex-center"}>


                        <li className="wearShowContainer">Wears

                            <ul className="wearShow">
                                <Link to={"/suit"} className="linkTag">
                                    <li>Suits</li>
                                </Link>

                                <Link to={"/agbada"} className="linkTag">
                                    <li>Agbada</li>
                                </Link>

                                <Link to={"/kaftan"} className="linkTag">
                                    <li>Kaftan</li>
                                </Link>
                            </ul>
                        </li>

                        <Link to={"/about"} className="navlinkTag">
                            <li>About</li>
                        </Link>
                        <Link to={"/contact"} className="navlinkTag">
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>



                {/* <div className="cartContainer c-p">
                    <TiShoppingCart size={30} />
                    <div className="cartAdder"><p>1</p></div>
                </div> */}

                
                <div className="regLoginContainer">
                    <Link to={"/reg"}>
                        <button>Logout</button>
                    </Link>

                </div>

                <div className=" flex-center" onClick={showMenu}>
                    <LuMenuSquare size={25} color="brown" className="menuNavContainer c-pointer" />
                </div>

            </nav >

        </div >
    )
}


export default Nav