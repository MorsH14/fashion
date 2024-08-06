import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import "./home.css"
import { TfiAngleRight } from "react-icons/tfi";
import 'animate.css';
import { Fade } from "react-awesome-reveal";
import { Card } from 'antd';
const { Meta } = Card;





const Homepage = () => {
    return (
        <div className="">

            <Nav />


            <div className="welcomeText flex-center">


                <div className="welcomeContainer flex-center">
                    <h1 class="animate__animated animate__zoomInDown">Welcome to the Home of Fashion</h1>
                    <Fade direction="left">
                        <h2>Men's Collection</h2>
                    </Fade>
                    <Fade direction="right">
                        <p>from kaftan to Pants, Suites, Senator wears, Agbada etc. </p>
                    </Fade>
                </div>
            </div>

            <div className="aboutHomeContainer">

                <div className="aboutText">
                    <img src="./assets/mclth.png" alt="" width={350} className="imgCnt" />
                </div>
                <   Fade direction="top" className="aboutPara">
                    <p>Founded in 2020 and based in Kwara State, Nigeria. MorsH clothiers is a custom tailor shop with a strong commitment and dedication to excellence. We delivers all of the style, choice, and exceptional service of our bespoke but being less time consuming and less labour intensive than bespoke</p>
                </  Fade>


                <Link to={"/about"} className=" linkTag">
                    <div className="aboutAngle">

                        <TfiAngleRight />

                    </div>
                </Link>

            </div>

            <div className="homeMainFlex">

                <div className="homeFlexContainer">

                    <div className="leftFlex">

                        <Fade direction="bottom">
                            <img src="./assets/f1.jpeg" alt="" className="homeImgContainer" />
                        </Fade>
                    </div>

                    <Fade direction="right">

                        <div className="rightFlex">

                            <h3>The Precess</h3>

                            <p>At Norton & Sons the made to measure service is delivered by the very same team who make our bespoke which means you get the same expert advice on style and cloth selection and the same expert cutter overseeing the fit of your clothes. We are pleased to offer made to measure tailored jackets, trousers and shirts.</p>

                        </div>
                    </Fade>
                </div>


                <div className="homeFlexContainer">

                    <Fade direction="left">

                        <div className="rightFlex">
                            <h3>The Precess</h3>

                            <p>At Norton & Sons the made to measure service is delivered by the very same team who make our bespoke which means you get the same expert advice on style and cloth selection and the same expert cutter overseeing the fit of your clothes. We are pleased to offer made to measure tailored jackets, trousers and shirts.</p>
                        </div>
                    </Fade>


                    <div className="leftFlex">
                        <Fade direction="top">
                            <img src="./assets/f2.jpeg" alt="" className="homeImgContainer" />
                        </Fade>

                    </div>
                </div>


                <div className="homeFlexContainer">

                    <div className="leftFlex">
                        <Fade direction="bottom">
                            <img src="./assets/f3.jpeg" alt="" className="homeImgContainer" />
                        </Fade>

                    </div>

                    <Fade direction="right">
                        <div className="rightFlex">

                            <h3>The Precess</h3>

                            <p>At Norton & Sons the made to measure service is delivered by the very same team who make our bespoke which means you get the same expert advice on style and cloth selection and the same expert cutter overseeing the fit of your clothes. We are pleased to offer made to measure tailored jackets, trousers and shirts.</p>

                        </div>
                    </Fade>

                </div>

                <div className="homeFlexContainer">

                    <Fade direction="left">
                        <div className="rightFlex">
                            <h3>The Precess</h3>

                            <p>At Norton & Sons the made to measure service is delivered by the very same team who make our bespoke which means you get the same expert advice on style and cloth selection and the same expert cutter overseeing the fit of your clothes. We are pleased to offer made to measure tailored jackets, trousers and shirts.</p>
                        </div>
                    </Fade>


                    <div className="leftFlex">
                        <Fade direction="bottom">
                            <img src="./assets/f4.jpeg" alt="" className="homeImgContainer" />
                        </Fade>

                    </div>
                </div>

            </div>

            <div className=" flex-center">
                <h1>Take a tour</h1>
            </div>



            <div className=" flex-center pad-10 gap-20 flex-wrap">

                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<div style={{width: "100%", height:400, overflow: "hidden"}}>
                        <img alt="suit" src="assets/s1 (1).jpeg" style={{objectFit:"cover", width:"100%"}}/>
                    </div>}
                    
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<div style={{width: "100%", height:400, overflow: "hidden"}}>
                        <img alt="suit" src="assets/agba.jpeg" style={{objectFit:"cover", width:"100%"}}/>
                    </div>}
                    
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<div style={{width: "100%", height:400, overflow: "hidden"}}>
                        <img alt="suit" src="assets/s1 (3).jpeg" style={{objectFit:"cover", width:"100%"}}/>
                    </div>}
                    
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<div style={{width: "100%", height:400, overflow: "hidden"}}>
                        <img alt="suit" src="assets/s1 (4).jpeg" style={{objectFit:"cover", width:"100%"}}/>
                    </div>}
                    
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
               

            </div>


            <Link to={"/Contact"}>

                <div className="appointment flex-center link">
                    <button>Book an appointment</button>
                </div>
            </Link>




            <Footer />

        </div>
    )
}


export default Homepage