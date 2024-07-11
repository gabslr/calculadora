import React from "react";
import '../hojas-de-estilo/Boton.css'


function Boton(props){

    const esOperador = valor => {

        // si valor no es un numero(isNAN) y tampoco es un punto y tampoco es un igual lo consideramos un operador
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return(                                                                           
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={ () => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton