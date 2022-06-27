import './ProjectForm.modules.css'
import Input from '../form/Input'
import Select from '../form/select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}){
    return (
        <form className = "form">
            <Input 
            type= "text" 
            text = "Nome do projeto: "
            name = "name"
            placeholder="insira o nome do projeto"
            />
            <Input 
            type= "number" 
            text = "Orçamento do projeto: "
            name = "budget"
            placeholder="insira o orçamento total"
            />
            <Select name="category_id" text="Selecione a categoria: "/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm