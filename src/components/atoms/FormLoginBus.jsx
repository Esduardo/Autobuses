import React from "react";
// import '../../assets/styles/FormLoginBus.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



function FormLoginBus() {

    const navigate = useNavigate();
    const form = useRef();
    const endPoint = " http://34.225.239.102/api/autobus/register";
   
    const clickHandler = (e) => {
      e.preventDefault();
      const newForm = new FormData(form.current);
      if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === "" || newForm.get("fecha") === "" || newForm.get("tipo") === ""|| newForm.get("nombre") === ""){
          alert("campos vacios");
       }else {
       alert("se agrego el autobus correctamente");
          
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
              navigate("/");
            }
        });
      }
    };





    return ( 
      
            <form  className="formulario" ref={form}> 
            <h1>alta de autobus</h1>
                <div className="contenedor">
                    <div className="input-contenedor">
                        <label htmlFor="clave">Clave autobus:</label> 
                        <input type="text" name='clave'  />
                    </div>
                    <div className="input-contenedor">
                        <label htmlFor="placa">Placas autobus:</label>
                         <input type="text" name='placa'  />
                    </div>
                    <div className="input-contenedor">
                     <label htmlFor="numero" >Numero de asientos:</label> 
                     <input type="text" name='numasientos' />
                    </div>
                    <div className="input-contenedor"> 
                        <label htmlFor="fecha" >Fecha de alta:</label> 
                        <input type="text" name='fecha' />
                    </div>
                    <div className="input-contenedor"> 
                        <label htmlFor="tipo" >Tipo:</label> 
                        <input type="text" name='tipo' />
                    </div>
                    <div className="input-contenedor">
                        <label htmlFor="nombre" >Nombre del chofer:</label> 
                        <input type="text" name='nombre'  />
                    </div>                    
                    <div className="input-contenedor">
                        <label htmlFor="licencia" >Numero de licencia:</label> 
                        <input type="text" name='licencia' />
                    </div> 
                </div >
                <button type="button" onClick={clickHandler} className="button" > Alta de autobus</button> 
                <Link to="/">salir</Link>
                  
                    
            </form>
    );
}

export default FormLoginBus;