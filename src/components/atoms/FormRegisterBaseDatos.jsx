import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

function FormRegisterBaseDatos() {
    const endpoint = "http://localhost:8080/user/create";
    const form = useRef()
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(form.current);
       
        if(newForm.get("lastName") === "" || newForm.get("firstName")=== "" ){//el simbolo de pesos despues se nombra la variable
            alert("campos vacios");
         }else{
             alert("campos correctos")
             const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    lastName: newForm.get("lastName"),
                firstName: newForm.get("firstName"),
                }),
              };
          
              fetch(endpoint, options)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data.status);
                  alert(JSON.stringify(data))
                 navigate('/')
                });   
            }
         };
   
    return ( 
        <form   ref={form}>
            <h1>Registrate</h1>
            <div>
            <input type="text"name='lastName'  placeholder="lastName"/>
                <input type="text"name='firstName' placeholder="firstName"/>
                <input type="button" onClick={handlerClick}  value="Registrarse"/>
               
            </div>
        </form>
     );
}

export default FormRegisterBaseDatos;