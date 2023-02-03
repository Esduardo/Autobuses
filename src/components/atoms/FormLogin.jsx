import '../../assets/styles/FormLogin.css';
import {Link} from "react-router-dom";

function FormLogin() {

    return ( 
        
        <form class="formulario">
            <h1>Login</h1>
            <div class="contenedor">
                <div className="input-contenedor">
                <i className="fas fa-envelope icon"></i>
                <input type="text" placeholder="Correo Electronico"/>
                
                </div>
                
                <div className="input-contenedor">
                <i className="fas fa-key icon"></i>
                <input type="password" placeholder="contrasenia"/>
                
                </div>
                <input type="submit" value="iniciar sesion" className="button"/>
                <p>¿No tienes una cuenta? <Link to="/register"> registrate</Link> </p>
            </div>
         </form>
    

     );
}

export default FormLogin;