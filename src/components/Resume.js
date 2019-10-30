import React, { Component } from 'react'
import Proimg from '../images/header3.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import './Style.css'
import 'react-bootstrap'
import AOS from 'aos'
import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
import project4 from '../images/project4.JPG'
import project5 from '../images/project5.JPG'
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar'
class Resume extends Component {
    componentDidMount() {
        AOS.init({
            offset: 200,
            duration: 4000,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }
    render() {
        return (
            <div>
                <div className="container-header-after">
                    <div className="container-header"  ><NavLink to="/">
                        <img className="profile-image img-fluid" src={Proimg} alt="Vishnu KG" /></NavLink>
                        <div>
                            <h1 className="name">Vishnu KG</h1>
                            <h5 className="desc">UI/UX Designer / Developer </h5>
                            <ul>
                                <li><a href="https://twitter.com/VKGCherupuzha" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/vishnukgcherupuzha/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/vishnukgcherupuzha" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-alt"></i></a></li>
                                <li><a href="https://stackoverflow.com/users/5130101/vishnu-kg-cherupuzha" rel="noopener noreferrer" target="_blank"><i className="fa fa-stack-overflow"></i></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=918880252601&text=&source=&data=" rel="noopener noreferrer" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                                <li><a href="https://coderwall.com/vishnukgcherupuzha" rel="noopener noreferrer" target="_blank"><i className="fa fa-external-link"  ></i></a></li>
                            </ul>
                        </div>
                        <NavLink className="header-button" to='/contactme'><button data-aos="zoom-in"> <i className="fa fa-paper-plane paper-plane " style={{ marginRight: "12px" }}> </i>CONTACT ME </button></NavLink>
                    </div>
                    <h1 className="header-border" style={{ color: "rgb(255, 174, 0)" }}>.</h1>
                </div>
                <div className="section" >
                    <div className="row main-content">
                        <div className="col-md-8 col-12">
                            <div>
                                <div className="content" data-aos="fade-up"
                                    data-aos-duration="1000">
                                    <h3>About Me</h3>
                                    <p>Experienced UI/UX Designer and developer with a demonstrated history of working in the computer software
                                     industry. Skilled in React.js,Node.js, HTML5,CSS3, javascript,ionic react,typescript, ES6,Bootstrap4,
                                     React Bootstrap, Adobe Photoshop. Strong engineering professional with a Engineer's Degree focused in
                                     Computer Science and Engineering from Gnanamani college of technology. </p>
                                </div>
                            </div>

                            <div>
                                <div className="content" data-aos="fade-up"
                                    data-aos-duration="1000">
                                    <h3>Latest Projects</h3>
                                    <h5>Cloud Homes Developers</h5>
                                    <h6>A responsive website for one of the leading builders in Kerala</h6>
                                    <img className="img-fluid" src={project1} alt="Latest project" />
                                    <div className="externalLink">
                                        <a href="http://www.cloudhomesdevelopers.com" target="_blank" rel="noopener noreferrer">
                                            www.cloudhomesdevelopers.com<i className="fa fa-external-link"></i></a>
                                    </div>
                                    <p>A responsive website using react.js for one of the leading builders in Kerala.
                                     I used React.js,react bootstrap, AOS for animation, lightbox for Image gallery,
                                     CSS3 for custom design.Contact form created using HTML and PHP, After client-side validation,
                                     these form data will be sent to a PHP page through a jQuery AJAX call.
                                    .Mail server was created using
                                    PHP because I was having Cpanel hosting which is not support Node.js. </p>
                                    <hr align="centre" width="100%" height="2px"></hr>
                                    <h5>PF Malayalam</h5>
                                    <h6>A responsive website for PF guidance</h6>
                                    <img className="img-fluid" src={project2} alt="Latest project" />
                                    <div className="externalLink">
                                        <a href="http://www.pfmalayalam.com" target="_blank" rel="noopener noreferrer">
                                            www.pfmalayalam.com<i className="fa fa-external-link"></i></a>
                                    </div>
                                    <p>A responsive website using React.js for PF guidance in Malayalam language.
                                    I found pfmalayalam website to make PF online
                                    process easier and convient to all Kerala people in their regional laguage.
                                    I used React.js, bootstrap, react-bootstrap
                                    to buils this project</p>
                                    <hr align="centre" width="100%" height="2px"></hr>
                                    <h3>On going Projects</h3>
                                    <h5>Jingle world preschool</h5>
                                    <h6>A responsive website for one of the leading preschool in Bangalore</h6>
                                    <img className="img-fluid" src={project3} alt="Ongoing project" />
                                    <div style={{ color: "white" }}>.</div>
                                    <p>A responsive website using react.js for one of the leading preschool in Bangalore.
                                    This is my ongoing project and the
                                    designe works are going on. Basically I use adobe photoshop to design my website and to
                                    edit photos as per website design</p>
                                    <hr align="centre" width="100%" height="2px"></hr>
                                    <h3>Other Projects</h3>
                                    <h5>My portfolio</h5>
                                    <h6>A responsive portfolio website</h6>
                                    <div className="other-projects">
                                        <img className="img-fluid img-thumbnail" src={project4} alt="other project" />
                                        <p>A responsive portfolio website. This website also  build in react.js.
                                        This website is a single page website
                                        with a contact form and the option to download resume in pdf format. </p>
                                    </div>
                                    <hr align="centre" width="100%" height="2px"></hr>
                                    <h5>Sample Contact Form</h5>
                                    <h6>A Sample Contact Form HTML,Ajax and PHP</h6>
                                    <div className="other-projects">
                                        <img className="img-fluid img-thumbnail" src={project5} alt="other project" />
                                        <p>PHP AJAX contact form is used to send contact information to the back end without page refresh.
                                        The AJAX based contact form will be useful when this component is widgetized  in an application layout.
                                        After client-side validation, these form data will be sent to a PHP page through a jQuery AJAX call.
                                         After sending contact email, the PHP page will respond to the AJAX request.
                                         You will not able to send email directly from xampp because xampp will not support mailing.
                                         you shoul host the website to sent the mail.
                                         </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="content" data-aos="fade-up"
                                    data-aos-duration="1000">
                                    <h3>Work Experiance</h3>
                                    <h4>UI/UX Designer and web developer -</h4><h4 style={{ fontWeight: "100" }}> Freelancer (2017 AUG- Present) </h4>
                                    <p>I am a Freelancer UI/UX designer and web developer since 2017. I spoke to my clients direct to get the project.
                                    Basically I get the logo design and website color combo from client side and make design using Adobe photoshop and sent
                                    sent to client before stating the web development. If client is ok with design I start with my project in VS code.
                                    I use React.js& Node.js for all my projects.and I loved to design the web layout using CSS3 and bootstrap.

                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12" >
                            <div className="content address" data-aos="fade-up"
                                data-aos-duration="1000" >
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td><i className="fa fa-map-marker" aria-hidden="true"></i></td>
                                            <td> Karala House,Cherupuzha p/o,Cherupuzha,Kannur,670511</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-envelope" aria-hidden="true"></i></td>
                                            <td> vishnukgcherupuzha@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-phone" aria-hidden="true"></i></td>
                                            <td> +91-8880252601<br></br> +91-8281231326<br></br> +91-6238141805</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-globe" aria-hidden="true"></i></td>
                                            <td><a href="https://vishnukgcherupuzha.github.io/My-Portfolio/" rel="noopener noreferrer" target="_blank" style={{ color: "black" }}>vishnu-kg-cherupuzha</a></td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                            <div className="content" data-aos="fade-up"
                                data-aos-duration="1000" >
                                <h3>Skills </h3>
                                <h4>React.js</h4>
                                <div>
                                    <ProgressBar variant="success" now={60} />
                                </div>
                                <h4>Node.js</h4>
                                <div>
                                    <ProgressBar variant="success" now={40} />
                                </div>
                                <h4>HTML5</h4>
                                <div>
                                    <ProgressBar variant="success" now={90} />
                                </div>
                                <h4>CSS3</h4>
                                <div>
                                    <ProgressBar variant="success" now={90} />
                                </div>
                                <h4>Bootstrap</h4>
                                <div>
                                    <ProgressBar variant="success" now={80} />
                                </div>
                            </div>
                            <div className="content address" data-aos="fade-up"
                                data-aos-duration="1000" >
                                <h3>Skills </h3>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td><i className="fa fa-graduation-cap" aria-hidden="true"></i></td>
                                            <td ><h5 style={{ textAlign: "left" }}>BE-Computer Science and Engineering</h5>
                                                <h6 style={{ textAlign: "left" }}>Gnanamani College of technology(2010-2014)</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-graduation-cap" aria-hidden="true"></i></td>
                                            <td ><h5 style={{ textAlign: "left" }}>Higher Secondary School</h5>
                                                <h6 style={{ textAlign: "left" }}>GVHSS Karthikapuram(2008-2010)</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-graduation-cap" aria-hidden="true"></i></td>
                                            <td ><h5 style={{ textAlign: "left" }}>SSLC</h5>
                                                <h6 style={{ textAlign: "left" }}>ST:Marys High School(2007-2008)</h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="content address" data-aos="fade-up"
                                data-aos-duration="1000" >
                                <h3>Personal details </h3>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td>Date of Birth </td>
                                            <td>20/09/1992</td>
                                        </tr>
                                        <tr>
                                            <td>Gender </td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <td>Marital Status </td>
                                            <td>Single</td>
                                        </tr>
                                        <tr>
                                            <td>Nationality  </td>
                                            <td>Indian</td>
                                        </tr>
                                        <tr>
                                            <td>Passport number </td>
                                            <td>T1258546</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="content" data-aos="fade-up"
                                data-aos-duration="1000" >
                                <h3>Languages </h3>
                                <h4>English</h4>
                                <div>
                                    <ProgressBar variant="primary" now={90} />
                                </div>
                                <h4>Malayalam</h4>
                                <div>
                                    <ProgressBar variant="primary" now={100} />
                                </div>
                                <h4>Tamil</h4>
                                <div>
                                    <ProgressBar variant="primary" now={60} />
                                </div>
                                <h4>Kannada</h4>
                                <div>
                                    <ProgressBar variant="primary" now={40} />
                                </div>
                                <h4>Hindi</h4>
                                <div>
                                    <ProgressBar variant="primary" now={40} />
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                   <div className="footer"><a className="resume" href="https://drive.google.com/file/d/1lKS20T6i9IZp_tkH-BPM-GZmUvLEvCDN/view?usp=sharing">MY RESUME</a>
                   </div> 
                   </div>
        )
    }
}

export default Resume
