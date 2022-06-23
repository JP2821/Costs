import {Link} from 'react-router-dom'

import Container from './Container'

import'./NavBar.modules.css'
import logo from '../../img/costs_logo.png'

function NavBar(){
    return(
        <nav className='navbar'>
            <Container>
                <img src={logo} alt = "Costs"/>
                <ul className = 'list'>
                    <li className="item">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to = "/projects">Projects</Link>
                    </li>
                    <li className="item">
                        <Link to = "/contact">Contact</Link>
                    </li>
                    <li className="item">
                        <Link to = "/company">Company</Link>
                    </li>
                    <li className="item">
                        <Link to = "/newproject">NewProject</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )
}

export default NavBar