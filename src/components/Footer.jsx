import React from "react";
import "../components/styles/footer.css";
import FormSearch from "../components/FormSearch";
import logoRash from '../components/imagenes/logoChico1.png';



const Footer = () => {
  return (
    <div>
      <footer className="nb-footer">
        <div className="container">
          <div className="row ">
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <div className="contenedorLogo">
                  <a href="./principal.html">
                  <img 
              src={logoRash} 
              alt='logo de Rash' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <br />
                <br />
                <h2 className="title">INFORMACION</h2>
                <ul>
                  <li>
                    <a href="#" />
                  </li>
                  <li>
                    <a href="#">¿Preguntas Frequentes?</a>
                  </li>
                  <li>
                    <a href="#">Formas de pago</a>
                  </li>
                  <li>
                    <a href="#">Terminos y Condiciones</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <br />
                <br />
                <h2 className="title">ACERCA DE RASH</h2>
                <ul>
                  <li>
                    <a href="#">¿Quienes Somos?</a>
                  </li>
                  <li>
                    <a href="#">Ubicacion</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <br />
                <br />
           {/*     <h2 className="title">SEGUINOS EN NUESTRAS REDES</h2>
                <div className="ContenedorRedesSociales">
                  <div className="redesSociales">
                    <a href="https://www.instagram.com" target="_blank">
                      <img
                        src="../imagenes/instagram.png"
                        alt="logo_instagram"
                      />
                    </a>
                    <a href="https://www.facebook.com" target="_blanck">
                      <img src="../imagenes/facebook.png" alt="Logo_facebook" />
                    </a>
                    <a href="https://www.twiter.com" target="_blanck">
                      <img src="../imagenes/twitter-.webp" alt="Logo_twiter" />
                    </a>
                  </div>
                </div>  */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container1">
          <div className="row textoFooter">
            <div className="col-md-3 col-sm-3" />
            <div className="col-md-6 col-sm-6 suscribite">
              <p>SUBSCRIBITE A NUESTRO NEWSLETTER</p>
              <FormSearch busqueda="Ingresa tu E-mail" TextoBoton="UNITE" />
            </div>
            <div className="col-md-3 col-sm-3" />
          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 margenFooter" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
