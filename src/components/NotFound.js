import React from 'react';

function NotFound(){
    return(
        <div className="text-center">
            {/* <h1>404 Not Found</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/> */}


            <body className="body404">
                <h1 className="text404">404 Error</h1>
                <p className="zoom-area">¡Ups! No pudimos encontrar la página que buscabas </p>
                <section className="error-container">
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
                </section>
            </body>
        </div>
        
    )
}


export default NotFound;