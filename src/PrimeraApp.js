// import { Fragment } from "react";
import PropTypes from 'prop-types';

// funtional component

const PrimeraApp = ( {saludo, subtitulo} ) => {
    
    // const saludo = ' Hola Mundo en Español '


    // const x = {
    //     nombre: 'Daniel',
    //     edad: 25
    // }


    return ( <>
                <h1> {saludo} !</h1>
                <p>{subtitulo}</p>
                {/* <pre>{JSON.stringify(x, null, 3)}</pre> */}
             </>
            );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Componentes y propiedades en React'
}


export default PrimeraApp;