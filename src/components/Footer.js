import React from 'react';

function Footer(){
    return (
        <React.Fragment>
			<footer>
				<div class="footer">
					<section class="seccion-footer">
						<h3 class="h3-delfooter">Institucional</h3>
						<ul >
							<li><a href="#">Quienes somos</a></li>
							<li><a href="#">Terminos y condiciones</a></li>
							<li><a href="#">Contactanos</a></li>
						</ul>
					</section>
					<section id="redes">
						<h3>Seguinos</h3>
						<ul id="caja-iconos-redes">
							<a href="https://www.instagram.com/" target="#"  class="iconos-redes"><i class="fab fa-instagram"></i></a>
							<a href="https://es-la.facebook.com/" target="#" class="iconos-redes"><i class="fab fa-facebook-square"></i></a>
							<a href="https://twitter.com/"  target="#" class="iconos-redes"><i class="fab fa-twitter"></i></a>
						</ul>
					</section>
					<section class="seccion-footer">
						<h3 class="h3-delfooter">Ayuda</h3>
						<ul>
							<li><a href="#">Locales</a></li>
							<li><a href="#">Formas de Pago</a></li>
							<li><a href="#">Preguntas Frecuentes</a></li>
						</ul>    
					</section>
				</div>
				<div class="copyright">
					<p>Copyright © 1999-2021 SNKR S.R.L.</p>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;