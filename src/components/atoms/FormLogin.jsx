import '../../assets/styles/FormLogin.css';
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { useRef } from "react";
function FormLogin() {

    const form = useRef()
    const endPoint = "http://34.225.239.102/api/iniciar";
    const navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        const newForm = new FormData(form.current);
        if(newForm.get("usuario") === "" || newForm.get("contrasenia") === ""){
          alert("campos vacios");
       }else{
          
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usuario: newForm.get("usuario"),
            contrasenia: newForm.get("contrasenia"),
          }),
        };
    
        fetch(endPoint, options)
          .then((response) => response.json())
    
          .then((data) => {
            if(data.status === true){
              navigate("/LoginBus");
            }else{
              alert("Datos incorrectos")
            }
          });
        }
      };

    return ( 
        <form className="formulario" ref={form}>
            <h1>Login</h1>
            <div class="contenedor">
                <div className="input-contenedor">
                <i className="fas fa-envelope icon"></i>
                <input type="text" name='usuario' placeholder="usuario"/>
                
                </div>
                
                <div className="input-contenedor">
                <i className="fas fa-key icon"></i>
                <input type="password" name='contrasenia' placeholder="contrasenia"/>
                
                </div>
                <input type="button" onClick={clickHandler} value="iniciar sesion" className="button"/>
                <p>¿No tienes una cuenta? <Link to="/register"> registrate</Link> </p>
            </div>
         </form>
    

     );
}

export default FormLogin;