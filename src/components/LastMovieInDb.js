import React from 'react';

import {useEffect , useState} from 'react'

function LastMovieInDb(){
    let [products , setProducts] = useState([]) ;

    // let [product , setProduct] = useState({})
    
    
    useEffect(  () => {
        
        fetch('http://localhost:3001/api/products') 
        .then(result => result.json()) 
        .then(data => 
            setProducts(data.data.products))
            

            console.log('Se monto el componente');
            console.log(products);



        } , [])
        




    return(
        <div className="col-lg-6 mb-4">
            {/* <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3001/images/products/' + products[products.length - 1].image} alt= {""} />
                    </div>

                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">{products[products.length - 1].name}</a>
                </div>
            </div> */}
        </div>
    )
}

export default LastMovieInDb;


