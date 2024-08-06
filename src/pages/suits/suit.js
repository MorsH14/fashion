import { Fade } from "react-awesome-reveal"
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import "./suit.css"




const Suit = () => {


    const suits = [

        {
            id: 1,
            img: './assets/s1 (8).jpeg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        {
            id: 2,
            img: './assets/s1 (13).jpeg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        {
            id: 3,
            img: './assets/s1 (16).jpeg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        
        {
            id: 4,
            img: './assets/s1 (3).jpeg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and it3s also going out for a free rate too'
        },
        
        {
            id: 5,
            img: './assets/s1 (4).jpeg',
            title: '3 pieces suit',
            price: '#200,000',
            description: 'This a classic 3pieces suit which is made with a wool material, very rare in the market and its also going out for a free rate too'
        },
        
        {
            id: 6,
            img: './assets/s1 (12).jpeg',
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

export default Suit