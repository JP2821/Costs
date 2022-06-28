import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

import './Footer.modules.css'

function Footer(){
    return (
        <footer className="footer">
            <ul className="social_list">
                <li className="color_facebook">
                    <a href='https://www.facebook.com/'><FaFacebook/></a>
                </li>
                <li className="color_instagram">
                    <a href='https://www.instagram.com/'><FaInstagram/></a>
                </li>
                <li className="color_linkedin">
                    <a href='https://www.linkedin.com/in/joao-pedro-079716228/'><FaLinkedin /></a>
                </li>
                <li className="color_whatsapp">
                    <FaWhatsapp/>
                </li>
            </ul>
            <p className="copy_right">
                <span>Costs</span> &copy; 2022
                </p>
        </footer>
    
    
    )
}

export default Footer