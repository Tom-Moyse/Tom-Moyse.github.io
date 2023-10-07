import React from 'react';
import '../css/main.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import ExitButton from './ExitButton';

const About = ({ showAbout, toggleAbout, toggleAnimation, showAnimation }) => {
    if (showAbout){
        return (
        <div className={`aboutModal ${showAnimation ? 'aboutAnimateOut' : 'aboutAnimateIn'}`}>
            <div className={`leftAbout ${showAnimation ? 'leftAnimateOut' : 'leftAnimateIn'}`}>
                <div className="aboutContent">
                    <h2>About Me</h2>
                    <h3>Computer Science MEng Student</h3>
                    <p>
                        I'm Tom Moyse a 21 year old <strong>Computer Science MEng</strong> student currently studying at the University of Warwick.
                        I love learning new things be it technologies or new hobbies.<br />
                        Currently I'm focusing on improving my ML skills using <strong>PyTorch</strong><br />
                        Outside of technical skills I am currently focused on learning Piano and Japanese.
                        When not focused on learning I enjoy playing video games, badminton and climbing.<br /><br />
                        Currently I am looking for <strong>graduate roles</strong> - feel free to <strong>contact me</strong> if you have any offers in this regard.
                    </p>
                </div> 
            </div>
            <div className={`rightAbout ${showAnimation ? 'rightAnimateOut' : 'rightAnimateIn'}`}>
                <div className="aboutContent">
                    <h2>Some useful links</h2>
                    <h3>Find out More</h3>
                    <ExitButton toggleAbout={ toggleAbout } toggleAnimation={ toggleAnimation }/>
                    <ul>
                        <li><a href="mailto:thomashmoyse@gmail.com">
                            <figure className='iconBox'>
                                <FaEnvelope size={'30%'}/>
                                <figcaption>Email</figcaption>
                            </figure>
                        </a></li>
                        <li><a href="https://linkedin.com/in/tmoyse">
                            <figure className='iconBox'>
                                <FaLinkedin size={'30%'}/>
                                <figcaption>LinkedIn</figcaption>
                            </figure>
                        </a></li>
                        <li><a href="https://twitter.com/TomMoyse">
                            <figure className='iconBox'>
                                <FaTwitter size={'30%'}/>
                                <figcaption>Twitter</figcaption>
                            </figure>
                        </a></li>
                        <li><a href="https://github.com/Tom-Moyse">
                            <figure className='iconBox'>
                                <FaGithub size={'30%'}/>
                                <figcaption>Github</figcaption>
                            </figure>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
    else{
        return null
    }
}

export default About
