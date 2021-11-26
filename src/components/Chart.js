import React from 'react';
import ChartRow from './ChartRow';

import {useEffect , useState ,useRef } from 'react'


function Chart (){
    const [products, setProducts] = useState([]);
    
    
    useEffect(() =>{
        fetch('http://localhost:3001/api/products')
            .then(result => result.json())
            .then(data => 
    
                setProducts(data.data.products)) 
                console.log(products);
    }, [])
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Genero</th>
                                <th>Marca</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Precio</th>
                                <th>Genero</th>
                                <th>Marca</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;