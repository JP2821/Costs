import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

import './Footer.modules.css'

function Footer(){
    return (
        <footer className="footer">
            <ul className="social_list">
                <li className="color_facebook">
                    <FaFacebook/>
                </li>
                <li className="color_instagram">
                    <FaInstagram/>
                </li>
                <li className="color_linkedin">
                    <FaLinkedin/>
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