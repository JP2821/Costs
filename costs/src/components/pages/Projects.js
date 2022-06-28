import Message from "../layout/Message"

import {useLocation} from 'react-router-dom'

import Container from '../layout/Container'

import LinkButton from '../layout/LinkButton.js'

import styles from './Projects.modules.css'

function Projects(){

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    return (
        <div className='project_container'>
            <div className='title_conatiner'>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message &&  <Message type = "success" msg={message}/>}
            <Container customClass="start">
                <p>Projetos</p>
            </Container>
        </div>
    )
}

export default Projects