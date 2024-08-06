import "./kaftan.css"
import Nav from "../../components/nav/nav"
import Footer from "../../components/footer/footer"
import { Fade } from "react-awesome-reveal"



const Kaftan = () => {

    const suits = [

        {
            id: 1,
            img: './assets/k1.jpg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        {
            id: 2,
            img: './assets/k2.jpg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        {
            id: 3,
            img: './assets/k3.jpg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        
        {
            id: 4,
            img: './assets/k4.jpg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        
        {
            id: 5,
            img: './assets/k5.jpg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        
        {
            id: 6,
            img: './assets/k6.jpg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        
    ]

    return (
        <div className="">
            <Nav />


            <div className="suitListContainer">
                <div className="listContainer">
                    <div className="mainContain">
                    {suits.map((suit) => (
                    <div key={suit.id} className="suit">
                        <img src={suit.img} alt={suit.title} width={300} className="img"/>
                        <Fade direction="bottom">
                        <div className="textImgPlaces">
                            <h2>{suit.title}</h2>
                            <h3>Price: {suit.price}</h3>
                            <p className="hoverText">{suit.description}</p>
                        </div>
                        </Fade>
                    </div>
                ))}
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Kaftan