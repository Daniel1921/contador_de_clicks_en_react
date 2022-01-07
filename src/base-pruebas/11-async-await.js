

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'pWLllEX2Lp3jTPeNpL9UDV9w1I5sGdfl';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
       
        const { url } = data.images.original;
      
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'no existe';
    }
    
    
    
}

 getImagen();



