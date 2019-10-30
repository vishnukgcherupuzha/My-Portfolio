import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'
import axios from 'axios'
class Contactme extends Component {
    constructor (props){
        super(props)
        
        this.state = {
            name: '',
            email: '',
            mobile: '',
            message: '',
            Nameerror:'',
            Emailerror:'',
            Mobileerror:'',
            Messageerror:'',
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit= e => {
        e.preventDefault()
        const { name, email, mobile, message } = this.state;
        if (name === ''){
            this.setState({Nameerror: " (Please enter your name)"})
        }
        else if (email === ''){
            this.setState({Emailerror: " (Please enter your email ID)"})
        }
        else if (mobile === ''){
            this.setState({Mobileerror: " (Please enter your mobile number)"})
        }
        else if (message === ''){
            this.setState({Messageerror: " (Please enter your message)"})
        }
        else{
           alert("Sorry!!Your message could'nt sent.Server error!! (Github.io cannot send mail using nodemailer. This website needed advance server to run properly)")
        }
    }
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
            <div className="contact">
            <div className="contact-back-area" data-aos="fade-down"
            data-aos-duration="1000">
                <NavLink to="/" className="contact-back"><i className="fa fa-arrow-left" aria-hidden="true"></i></NavLink >
                </div>
                <div className="form-body">
                    <div className="form-container"  data-aos="fade-up"
                    data-aos-duration="1000">
                        <Form className="form-class" onSubmit={this.handleSubmit}>
                            <Form.Group onChange={this.handleChange}  data-aos="fade-left"
                            data-aos-duration="1000">
                                <Form.Label>Name<span style={{color:"red"}}>{this.state.Nameerror}</span></Form.Label> 
                                <Form.Control  type="name" name="name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group onChange={this.handleChange} data-aos="fade-right"
                            data-aos-duration="1000">
                                <Form.Label>Email Address<span style={{color:"red"}}>{this.state.Emailerror}</span></Form.Label>
                                <Form.Control  type="email" name="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group   data-aos="fade-left"
                            data-aos-duration="1000">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Label>Name<span style={{color:"red"}}>{this.state.Mobileerror}</span></Form.Label>
                                <Form.Control onChange={this.handleChange} type="number" name="mobile"  placeholder="mobile" />
                            </Form.Group>
                            <Form.Group  data-aos="fade-right"
                            data-aos-duration="1000">
                                <Form.Label>Message</Form.Label>
                                <Form.Label>Name<span style={{color:"red"}}>{this.state.Messageerror}</span></Form.Label>
                                <Form.Control onChange={this.handleChange} type="message" name="message" as="textarea" rows="4" placeholder="message" />
                            </Form.Group>
                            <button  className="btn-grad" type="submit">Send message</button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contactme
