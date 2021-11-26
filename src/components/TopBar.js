import React from 'react';




function TopBar(){
    return(


		<React.Fragment>
			<header >
			<div className="cabecera">
				<p> ¡Envios gratis a todo el país! </p>
			</div>
			<div className="main-header">
				<a href="/" id="logo">
					<img src="" alt="" />
				</a>

				<form action='/products/search' method='GET' className="search">
				<div className="inputSearch">
					<input type="text" placeholder="Buscar..." className="search2" name="search" />
					<button type="submit" value="search" className="botonBusqueda"><i className="fas fa-search"></i></button>
				</div>
				</form>

				<div className="login-cart" >


					<div >
						<a id="login" href="/users/login">
							<i className="fas fa-user"></i>
						</a>
					</div>
					

					<div>
						<a id="cart" href="/cart">
							<i className="fas fa-shopping-cart"></i>
						</a>
					</div>


				</div>  
			</div>

			<div className="second-header">
				<form action="/products">
					<a href="/products"><p> <button>TODOS</button></p></a>

				</form>
				<form action="/products/hombre">
					<a href="/products/hombre"><p> <button>HOMBRE</button></p></a>

				</form>
				<form action="/products/mujer">
					<a href="/products/mejer"><p> <button>MUJER</button></p></a>

				</form>
				<form action="/products/sale">
					<a href="/products/sale"><p > <button  id="sale">SALE</button></p></a>

				</form>

				</div>
 
			</header>
		</React.Fragment>

    )
}
export default TopBar;