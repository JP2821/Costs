import './ProjectCard.modules.css'

import {BsPencil, BsTrashFill} from 'react-icons/bs'

function ProjectCard({id, name, budget, category, handleRemove}){
    return(
    <div className='project_card'>
        <h4>{name}</h4>
        <p>
            <span>Orçamento: </span> R${budget}
        </p>
        <p className='category_text'>
            <span></span> {category}
        </p>
        <div>
            <p>Editar</p>
            <p>Remover</p>
        </div>
    </div>
    )
}

export default ProjectCard