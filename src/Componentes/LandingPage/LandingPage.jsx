import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { useLocation } from "react-router-dom";


const LandingPage = () => {
    const navigate = useNavigate();

    // Redirige a la página principal después de 5 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/main'); // Redirige a la página principal
        }, 5000);


        // Limpia el temporizador cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, [navigate]);


    return (

        <div className="landing-container">

            <header className="landing-header">
                <h1>BIENVENIDO</h1>
                <h2>Biblioteca  Virtual UNIR.</h2>
            </header>

                <article className="landing-article">
                    <section className="landing-image-text">
                        <div className="landing-image-container">
                            <img src="/assets/img/Biblioteca.jpg" alt="Relatos de Papel" className="landing-image"/>
                        </div>
                        <div className="landing-text">
                            <p>Prepárate para sumergirte en un mundo de historias, conocimiento y aventura, te invitamos
                                a descubirir nuestra colección.
                                <br/>
                                Relatos de Papel es tu tienda literaria digital, donde la magia de los libros cobra
                                vida.

                                <h1> Te dirigiremos a la pagina princial</h1>
                            </p>

                        </div>

                    </section>

                </article>


            <footer className="landing-footer">
                <p>2024 Relatos de Papel - Todos los derechos reservados</p>
                </footer>
        </div>
    );
}


export default LandingPage;