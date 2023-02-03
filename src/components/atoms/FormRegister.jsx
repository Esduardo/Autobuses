import '../../assets/styles/FormRegister.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";


function FormRegister() {
    const navigate = useNavigate()
    const name = useRef()
    const username = useRef()
    const password = useRef()

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario'

    const handlerClick = (e)=>{
        e.preventDefault();
        //navigate("/home")
        const newForm = new FormData(form.current)
        //let newName = newForm.get('name')
        //alert(`Nombre: ${newForm.get('name')} \nUsername: ${newForm.get('username')}`)

        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }

        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data))
        })
    }


    return (
        <form className="formulario" ref={form}>
    
            <h1>Registrate</h1>
            <div className="contenedor">
            
                <div className="input-contenedor">
                <i className="fas fa-user icon"></i>
                    <input type="text"name='nombre' placeholder="Nombre"/>
                    </div>

                    <div className="input-contenedor">
                    <i className="fas fa-user icon"></i>
                    <input type="text" name='usuario' placeholder="usuario"/>
                    </div>
                    
                    <div className="input-contenedor">
                    <i className="fas fa-envelope icon"></i>
                    <input type="text"name='correo' placeholder="Correo Electronico"/>
                    
                    </div>
                    
                    <div className="input-contenedor">
                    <i className="fas fa-key icon"></i>
                    <input type="password" name='contrasenia' placeholder="Contrasenia"/>
                </div>
                    <input type="button" onClick={handlerClick}  value="Registrarse"  class="button"/>
                    <Link to="/">salir</Link>
            </div>
           
        </form>
     );
}

export default FormRegister;