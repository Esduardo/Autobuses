import React from "react";

function FormLoginBus() {
    return ( 
      
            <form ref={form} className="formulario"> 
                <div>
                    <div>
                        <label htmlFor="clave" className="h1">Clave autobus:</label> 
                        <input type="text" className="text" />
                    </div>
                    <div>
                        <label htmlFor="placa" className="h2">Placas autobus:</label>
                         <input type="text" className="text2" />
                    </div>
                    <div>
                     <label htmlFor="numero" className="h3">Numero de asientos:</label> 
                     <input type="text" className="text3" />
                    </div>
                    <div> 
                        <label htmlFor="fecha" className="h4">Fecha de alta:</label> 
                        <input type="text" className="text4" />
                    </div>
                    <div> 
                        <label htmlFor="tipo" className="h5">Tipo:</label> 
                        <input type="text" className="text5" />
                    </div>
                    <div>
                        <label htmlFor="nombre" className="h6">Nombre del chofer:</label> 
                        <input type="text" className="text6" />
                    </div>                    
                    <div>
                        <label htmlFor="licencia" className="h?">Numero de licencia:</label> 
                        <input type="text" className="text?" />
                    </div> 
                </div>
                    <br />
                    <button type="button" className="btn3" onclick={''}>Alta de autobus</button> 
            </form>
    );
}

export default FormLoginBus;