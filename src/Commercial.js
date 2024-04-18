import { dataCom } from "./dataCom";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import imgBar from './bar.jpg';
import commentTwo from './about/commentTwo.jpg';
import { useState } from "react";
import Footer from "./Footer";
import StateForm from "./StateForm";




const Commercial = () => {

    const [comImage, setcomImage] = useState(0);
    const { image } = dataCom[comImage];

    const prevComImage = () => {
        setcomImage((comImage => {
            comImage --;
            if (comImage < 0) {
                return dataCom.length - 1;
            }
            return comImage;
        }))
    }

    const nextComImage = () => {
        setcomImage((comImage => {
            comImage ++;
            if (comImage > dataCom.length - 1) {
                comImage = 0;
            }
            return comImage;
        }))
    }

    return (
        <div>
            <img className='hall' src={imgBar} alt=''/>

            <div className='container'>
            <h2 className='our'>A Glance At Some Of Our Commercial Projects</h2>
            </div>

            <div className='container'>
            <button onClick={prevComImage}><GrPrevious /></button>
            <img className='comproject' src={image} alt=''/>
            <button onClick={nextComImage}><GrNext /></button>
            </div>
            <div className='container'>
            <h2 className='award'>Award-Winning Commercial Design Services</h2>
            </div>
            <p className="resident">Our quick, easy design process works great for companies that are looking to freshen up their space with a remodel or new furnishings. Our designers meet with you onsite to understand your vision and functional needs and then we get to work pulling together a completely custom design plan for your space. Our process is collaborative and interactive, making sure we're on the right track from beginning to end.</p>
            <p className="resident">Our highly educated and experienced interior designers are wildly creative and will come to the table with unconventional ideas you may not have considered. We love working with sustainable materials and source products locally as often as possible. We get creative to provide solutions for your biggest design challenges. Your employees and your customers will love your space! </p>
            <img className='feature comone'  src={commentTwo} alt=''/>
            <div className='container'>
            <h3 className='space'>Are You Ready To Love Your Space?</h3>
            </div>
            <StateForm/>
            <Footer/>
        </div>
    )
}

export default Commercial;