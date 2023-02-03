import '../../assets/styles/FormRegister.css'
import {Link} from "react-router-dom";

function FormRegister() {
    return (
        <form className="formulario">
    
    <h1>Registrate</h1>
     <div className="contenedor">
     
     <div className="input-contenedor">
         <i className="fas fa-user icon"></i>
         <input type="text" placeholder="Nombre"/>
         
         </div>
         
         <div className="input-contenedor">
         <i className="fas fa-envelope icon"></i>
         <input type="text" placeholder="Correo Electronico"/>
         
         </div>
         
         <div className="input-contenedor">
        <i className="fas fa-key icon"></i>
         <input type="password" placeholder="Contrasenia"/>
         </div>
         <input type="submit" value="Registrarse"  class="button"/>
     </div>
    </form>
     );
}

export default FormRegister;