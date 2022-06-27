import ProjectForm from '../project/ProjectForm'
import './NewProject.modules.css'


function NewProject(){
    return (
        <div className = "new_project_container">
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>formulário</p>
            <ProjectForm btnText = "Criar Projeto" />
        </div>
    )
}

export default NewProject