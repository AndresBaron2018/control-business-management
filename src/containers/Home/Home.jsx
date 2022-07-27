import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import logo from '../../Multimedia/Photos/Logo.png';
import OurCompany from '../../components/OurCompany'
import OurServices from '../../components/OurServices'
import FrequentQuestions from '../../components/FrequentQuestions'
import 'react-tabs/style/react-tabs.css';
import './Home.css'

const Home = () => {
    return (
        <section alt="control y gestion empresarial">
            <div className="wrapper">
                <div className="one"></div>
                <div className="logo">
                    <img src={logo} itemProp="image" alt="gestion empresarial" />
                    <h1 className="slogan">Control y gestion empresarial</h1>
                </div>
                <h1 className="legend" >
                    Le ayudamos a desarrollar su potencial de manera sencilla, clara
                    y eficaz
                </h1>
                <div className="contact" itemScope itemType="https://schema.org/Organization">
                    <h1 className="title">Contactanos</h1>
                    <div>
                        <AiOutlineMail className="icons-deitails" />
                        <span className="text" itemProp="email">
                            controlygestionempresarial<br />@gmail.com
                        </span>
                    </div>
                    <div>
                        <BsTelephone className="icons-deitails" />
                        <div className="text" itemProp="telephone">
                            +57 313 848 4848
                        </div>
                    </div>
                    <span className="text-logo" itemProp="addressLocality">Colombia, Bogota</span>
                </div>
                <div className="body">
                    <div className="header">
                        <Tabs className="header-right">
                            <TabList>
                                <Tab className='tap-list aling'>Nuestra compañia</Tab>
                                <Tab className='tap-list aling'>Nuestros servicios</Tab>
                                <Tab className='tap-list aling'>Preguntas frecuentes</Tab>
                            </TabList>

                            <TabPanel>
                                <OurCompany />
                            </TabPanel>
                            <TabPanel>
                                <OurServices />
                            </TabPanel>
                            <TabPanel>
                                <FrequentQuestions />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;



