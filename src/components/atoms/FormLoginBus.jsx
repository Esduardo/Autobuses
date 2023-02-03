import React from "react";
import '../../assets/styles/FormLoginBus.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



function FormLoginBus() {

    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = " http://34.225.239.102/api/autobus/register";
   
    const clickHandler = (e) => {
      e.preventDefault();
      const newForm = new FormData(Form.current);
      if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === "" || newForm.get("fecha") === "" || newForm.get("tipo") === ""|| newForm.get("nombre") === ""){//el simbolo de pesos despues se nombra la variable
          alert("campos vacios");
       }else{
          
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clave: newForm.get("clave"),
          placa: newForm.get("placa"),
          numasientos: newForm.get("numasientos"),
          fecha: newForm.get("fecha"),
          tipo: newForm.get("tipo"),
          nombre: newForm.get("nombre"),
          licencia: parseInt(10000 + Math.random() * 90000),
        }),
      };
  
      fetch(endPoint, options)
        .then((response) => response.json())
        .then((data) => {
         
          if(data.status === true){
              navigate("/Login");
            }
        });
      }
    };





    return ( 
      
            <form  className="formulario"> 
            <h1>alta de autobus</h1>
                <div className="contenedor">
                    <div className="input-contenedor">
                        <label htmlFor="clave" className="h1">Clave autobus:</label> 
                        <input type="text" name="clave" className="text" />
                    </div>
                    <div className="input-contenedor">
                        <label htmlFor="placa" className="h2">Placas autobus:</label>
                         <input type="text" name="placa" className="text2" />
                    </div>
                    <div className="input-contenedor">
                     <label htmlFor="numero" className="h3">Numero de asientos:</label> 
                     <input type="text" name="numasientos" className="text3" />
                    </div>
                    <div className="input-contenedor"> 
                        <label htmlFor="fecha" className="h4">Fecha de alta:</label> 
                        <input type="text" name=" fecha" className="text4" />
                    </div>
                    <div className="input-contenedor"> 
                        <label htmlFor="tipo" className="h5">Tipo:</label> 
                        <input type="text" name="tipo" className="text5" />
                    </div>
                    <div className="input-contenedor">
                        <label htmlFor="nombre" className="h6">Nombre del chofer:</label> 
                        <input type="text" name="nombre" className="text6" />
                    </div>                    
                    <div className="input-contenedor">
                        <label htmlFor="licencia" className="h?">Numero de licencia:</label> 
                        <input type="text" name=" licencia" className="text?" />
                    </div> 
                </div >
                <button type="button" className="button" onclick={clickHandler}>Alta de autobus</button> 
                <Link to="/">salir</Link>
                  
                    
            </form>
    );
}

export default FormLoginBus;