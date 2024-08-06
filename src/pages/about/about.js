import "./about.css"
import Footer from "../../components/footer/footer"
import { Fade } from "react-awesome-reveal";
import Nav from "../../components/nav/nav"


const About = () => {
    return (
        <div className="">

            <Nav />

            <div className="aboutHomeContainer">
                <Fade direction="top">

                    <div className="aboutText">
                        <h1>About Us</h1>
                    </div>
                    <div className="aboutParaH">
                        <p>MorsH Clothiers, established in 2021 and situated in Kwara State, Nigeria, epitomizes bespoke tailoring with an unwavering dedication to superior craftsmanship. Our inception gained prominence in 2022, driven by a vision to showcase the elegance of tailored garments. Specializing in a range of attire including suits, Kaftans, Agbadas, pants, and more, we extend our services nationwide with a reputation for reliability. Our pricing is competitive yet flexible, ensuring accessibility without compromising quality.</p>
                    </div>
                </Fade>

                <Fade direction="bottom">

                    <div className="aboutTextImg flex-center gap-50">
                        <img src="./assets/p2.jpg" alt="" className="i400" width={400} height={600} />

                        <Fade direction="right">

                            <div>
                                <h2>AFFORDABLE AND DURABLE HIGH QUALITY PRODUCTS.</h2>

                                <p className="morshtext">We offer top-notch products crafted from durable materials at an affordable price point. Our custom-made clothing allows clients to choose their preferred fabrics, colors, and styles. Each garment is meticulously hand-stitched, reflecting our commitment to quality craftsmanship. Our dedication to exceptional customer service ensures high levels of satisfaction among our clientele.</p>
                            </div>
                        </Fade>

                    </div>
                </Fade>
                <div className=" aboutTextImg flex-center gap-50 mar-20">


                    <Fade direction="left">

                        <div>
                            <h2>A SELETION OF STYLE THAT BOOST YOUR CONFIDENCE.</h2>

                            <p className="morshtext">We offer a wide range of style options, ensuring clients can easily select their preferences or request specific modifications. Whether you have questions or need assistance, we're available to help over the phone or via WhatsApp. We're excited to collaborate with you to deliver top-notch men's clothing that boosts self-confidence and ensures you look your best. </p>
                        </div>
                    </Fade>

                    <Fade direction="bottom">

                        <img src="./assets/p6.jpg" alt="" className="i400" width={450} height={600} />
                    </Fade>

                </div>

                <Fade direction="bottom">

                    <div className="aboutTextImg flex-center gap-50 mar-20">



                        <div>
                            <img src="./assets/p1.jpg" alt="" className="imageN i401" width={600} height={1000} />
                        </div>

                        <div className="imageN">

                            <div>
                                <img src="./assets/p8.jpg" alt="" className="i400" width={500} height={600} />
                            </div>

                            <div>
                                <img src="./assets/p3.jpg" alt="" className="i400" width={500} height={600} />
                            </div>
                        </div>


                    </div>

                </Fade>

            </div>


            <Footer />

        </div>
    )
}


export default About