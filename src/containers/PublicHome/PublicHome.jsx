import Logo from '../../Multimedia/Photos/Logo.png';
import './assets/scss/templatemo-chain-app-dev.css'

// Icons
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineControl } from 'react-icons/ai';
import { BsPersonCheck } from 'react-icons/bs';
import { SiMinetest } from 'react-icons/si';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { GiThermometerScale } from 'react-icons/gi';
import { GiCircleForest } from 'react-icons/gi';
import { GiUpgrade } from 'react-icons/gi';
import { AiOutlineAudit } from 'react-icons/ai';
import { RiHealthBookLine } from 'react-icons/ri';
import { MdOutlineSentimentVerySatisfied } from 'react-icons/md';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { TbCheckupList } from 'react-icons/tb';


const PublicHome = () => {
    return (
        <section>
                <ul className="nav">
                    <header className="header-area header-sticky wow slideInDown" >
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                        <div className="container-fluid">
                                            <a className="navbar-brand">
                                                <img src={Logo} className="company-logo" alt="Control Y Gestion Empresarial" />
                                            </a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <div className="col-md-6"></div>
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-light">
                                                    <li className="nav-item"><a href="#top" className="nav-link active">C & G</a></li>
                                                    <li className="nav-item"><a href="#services" className="nav-link">Servicios</a></li>
                                                    <li className="nav-item"><a href="#about" className="nav-link">Sobre nosotros</a></li>
                                                    {/* <li className="nav-item"><a href="#our-team" className="nav-link">Our team</a></li> */}
                                                    <li className="nav-item"><a href="#contact-us" className="nav-link">Contáctenos</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                </ul>

                <div className="main-banner wow fadeIn" id="top" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6 align-self-center">
                                        <div className="left-content show-up header-text wow fadeInLeft" >
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h2>C & G</h2>
                                                    <h4>Control Y Gestion Empresarial</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-image wow fadeInRight" >
                                            <img src="assets/images/slider-dec.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="services" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-heading  wow fadeInDown"  >
                                    <h4>Increíbles  <em>servicios</em> para ti</h4>
                                    <p>
                                    Le ayudamos a desarrollar su potencial de manera sencilla, clara y eficaz
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <AiOutlineControl className="icons-details" />
                                    <h4>Implementación de sistemas de gestión</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <BsPersonCheck className="icons-details" />
                                    <h4>Desarrollo de competencias del personal</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <SiMinetest className="icons-details" />
                                    <h4>Diagnóstico empresarial</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <AiOutlineDeliveredProcedure className="icons-details" />
                                    <h4>Evaluación y seguimiento de proveedores</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <GiThermometerScale className="icons-details" />
                                    <h4>Técnicas para la medición y control de los procesos</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <AiOutlineAudit className="icons-details" />
                                    <h4>Auditorias organizacionales</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <GiCircleForest className="icons-details" />
                                    <h4>Control y gestión ambiental</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <RiHealthBookLine className="icons-details" />
                                    <h4>Salud y seguridad ocupacional</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <GiUpgrade className="icons-details" />
                                    <h4>Estandarización, gerencia y mejora de procesos</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <MdOutlineSentimentVerySatisfied className="icons-details" />
                                    <h4>Metodología para la medición de la satisfacción del cliente</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item first-service">
                                    <TbCheckupList className="icons-details" />
                                    <h4>Manejo de PQR (peticiones, quejas y reclamos)</h4>
                                    {/* <p></p>
                                    <div className="text-button">
                                        <a href="#master-software-factory">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item second-service">
                                    <MdOutlinePersonSearch className="icons-details" />
                                    <h4>Afiliación para seguimiento de nuestros clientes</h4>
                                    <p></p>
                                    {/* <div className="text-button">
                                        <a href="#master-academy">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="service-item fourth-service">
                                    <div className="icon"></div>
                                    <h4>24/7 Servicio de asistencia</h4>
                                    <p>Estamos constantemente atentos a nuestros clientes.</p>
                                    {/* <div className="text-button">
                                        <a href="#">Leer más <i className="fa fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="master-software-factory" className="services section">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 section-heading  wow fadeInDown">
                                <h4><em>Por que contactarnos</em></h4>
                                <p>
                                    Actualmente, las organizaciones, independientemente de su tamaño y de su actividad económica, se ven enfrentadas a mercados competitivos, en los que, la satisfacción de sus clientes y la gestión interna de sus procesos juegan un factor fundamental en el cumplimiento de sus objetivos organizacionales...
                                </p>
                                <h6><em>Permítanos ayudarle.</em></h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about" className="about-us section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="section-heading">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="box-item">
                                                <h4><em>Quienes somos</em></h4>
                                                <p>
                                                C & G es una empresa dedicada a la asesoría y consultaría en los diferentes sectores económicos, cuenta con amplia experiencia a nivel nacional e internacional en la implementación, seguimiento, mantenimiento y mejora de sistemas de gestión.
                                                <br />
                                                <br />
                                                Trabajamos con una metodología de gerencia de proyectos que nos permite asegurar la calidad de los resultados que entregamos.
                                                Para ello implementamos estrategias de conformación de grupos de trabajo con nuestros clientes enfocados al cumplimiento de sus necesidades y expectativas.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="box-item">
                                                <h4><em>Nuestro personal</em></h4>
                                                <p>
                                                    Somos expertos profesionales con gran calidad técnica y humana, gustosos de prestar nuestros servicios a costos razonables ajustados al mercado. Profesionales con experiencia acorde con las actividades a realizar, con alto sentido de compromiso, ajustados a la realidad y cultura de nuestros clientes.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="box-item">
                                                <h4><em>Misión</em></h4>
                                                <p>
                                                    Brindar servicios integrales en las áreas de asesoria y consultaría en sistemas de gestión y acreditación.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="box-item">
                                                <h4><em>Clientes</em></h4>
                                                <p>
                                                Sector salud, ingeniería, educación, producción, servicios, exequiales, entre otros, tanto en el sector público como privado.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-image">
                                    <img src="assets/images/about-right-dec.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div id="our-team" className="pricing-tables">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-heading">
                                    <h4><em>Our team</em> </h4>
                                    <img src="assets/images/heading-line-dec.png" alt="" />
                                    <p>We have the best professionals.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="pricing-item-pro">
                                    <span className="price">CEO</span>
                                    <div className="team">
                                        <h4>Andres Baron</h4>
                                        <img src={President} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="pricing-item-pro">
                                    <span className="price">Commercial <br />director</span>
                                    <div className="team">
                                        <h4>Zharannie Vallecilla</h4>
                                        <img src={Director} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="pricing-item-pro">
                                    <span className="price">Technical <br />leader</span>
                                    <div className="team">
                                        <h4>Jesus Eduardo Lopez Florez </h4>
                                        <img src={TechnicalLeader} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                

                <div id="master-software-factory" className="services section">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 section-heading  wow fadeInDown">
                                <h4><em>Preguntas frecuentes</em></h4>

                                <h6>¿CyG o C&G que tipo de empresa es?</h6>
                                <p>
                                    CyG o C&G Control y Gestión Empresarial identificada con el NIT 900.041.196-5, es una empresa dedicada únicamente a la consultoría empresarial como se indica en la Cámara de Comercio de Bogotá y en su escritura de constitución ante notaria.
                                </p>
                                <h6>¿Cuáles son los medios autorizados de comunicación con C&G?</h6>
                                <p>
                                    C&G dispone del correo controlygestionempresarial@gmail.com y de la línea celular 313.848.4848 para su comunicación, cualquier otra comunicación realizada desde o hacia otro medio no es oficial, por lo que CyG la desconoce y no se hace responsable de la misma.
                                </p>
                                <h6>¿C&G Control y Gestión Empresarial mantiene relaciones comerciales con entidades financieras que manifiestan Prestamos de Dinero?</h6>
                                <p>
                                   C&G no presta dinero ni mantiene ninguna relación comercial, de asociación, de aliados o como corredora a nivel de empresa, socios o representantes legales con ninguna entidad financiera o entidades de préstamos Online.
                                </p>
                                <h6>¿Los socios o representantes legales de C&G son representantes o empleados de otras empresas?</h6>
                                <p>
                                Los socios y/o representantes legales de CyG Control y Gestión Empresarial no son funcionarios, empleados, consultores, representantes legales, de ninguna compañía prestadora o prestamista de dinero ni de sus corredores y asociados.
                                </p>
                                <h6>¿C&G ha autorizado el uso de su nombre a otras empresas?</h6>
                                <p>CyG no ha autorizado el uso del nombre “C&G Control y Gestión Empresarial”, ni el uso del NIT 900.041.196-5, ni el uso de sus teléfonos o email de contacto, ni la dirección de correspondencia, ni el uso del nombre de alguno de sus representantes legales para que sea utilizado por otras empresas.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer id="contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                            </div>
                         

                            <div className="col-lg-4">
                                <div className="footer-widget">
                                    <h4>
                                        <img src={Logo} className="logo-details" alt="C & G Control Y Gestion Empresarial" /> <br />
                                        C & G Control Y Gestion Empresarial <br />
                                        <p>Le ayudamos a desarrollar su potencial de manera sencilla, clara y eficaz</p>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-3 upper-distance">
                                <div className="footer-widget">
                                    <h4>Contáctenos</h4>
                                    <p><AiOutlineMail /> controlygestionempresarial@gmail.com</p>
                                    <p><BsTelephone /> +57 313 848 4848</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </section>
    );
};

export default PublicHome;