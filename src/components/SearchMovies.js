import React from 'react';
import {useEffect , useState ,useRef } from 'react'
// import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){

	const [products, setProducts] = useState([]);
	const [keyword , setKeyword] = useState('Nike')
	// const keyword = 'action';
	// Credenciales de API
	const apiKey = '42992614'; // Intenta poner cualquier cosa antes para probar


	useEffect(() =>{
        fetch('http://localhost:3001/api/products')
            .then(result => result.json())
            .then(data => 

                setProducts(data.data.products)) 
				console.log(products);
	}, [keyword])

	const inputMarca = useRef()
	
	function changeKeyword (e) {
		e.preventDefault() ;
		console.log(inputMarca.current.value);
		setKeyword(inputMarca.current.value) ;
	}


	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por marca:</label>
									<input ref={inputMarca}   type="text" className="form-control" />
								</div>
								<button onClick = {changeKeyword} className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Zapatillas por marca: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								if (product.name.includes(keyword)) {
									return (
										<div className=" col-sm-2 col-md-6 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3">
													<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
												</div>
												<div className="card-body">
													<div className="text-center">
														<img 
															className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
															src={'http://localhost:3001/images/products/'+product.image}
															alt={product.image} 
															style={{ width: '400px', height: '400px', objectFit: 'cover' }} 
														/>
													</div>
													<p> $ {product.price}</p>
												</div>
											</div>
										</div>
									)
								}
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
