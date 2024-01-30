import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

export default function NavBar() {

    const [showMediaicon, setShowMediaIcon] = useState(false)
    const [screenWidth, setScreenWidth] = useState()

    function screenSize() {
        const Screenwidth = window.innerWidth
        setScreenWidth(Screenwidth) 
        return width
    }

    useEffect(()=>{
        addEventListener('resize', screenSize)
        removeEventListener('reisze', screenSize)
    }, [])

    return (
        <>
            <nav className="main__div">
                <div className="logo" style={{ width: '60px' }}>
                    <img src="goku.svg" alt="" />
                </div>

                <div className={!showMediaicon ? 'menu__link' : 'mobile__menu__link' && screenWidth>= 998 ?  'menu__link' : 'mobile__menu__link'}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        {/* <li><Link to='/contact'>contact</Link></li> */}
                        {/* <li><Link to='/project'>pages</Link></li> */}
                        <li><Link to='/experience'>Experinece</Link></li>
                    </ul>
                </div>

                <div className="social__media">
                    <ul className="social__media__desktop">
                        <li>
                            <a href="https://github.com/gokuthecoder" target="_blank"><FaGithub size='1.5rem' color="#333" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gokuthecoder" target="_blank"><FaLinkedin size='1.5rem' color="#3b5998" /></a>
                        </li>
                        <li>
                            <a href="https://youtube.com/gokuthecoder" target="_blank"><IoLogoYoutube size='1.5rem' color="red" /></a>
                        </li>
                    </ul>
                    <div className="hamburger__menu">
                        <a href="#" onClick={() => { setShowMediaIcon(!showMediaicon) }}>
                            {
                                !showMediaicon ? <RxHamburgerMenu size="1.5rem" /> : <RxCross2 size="1.5rem" />
                            }
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}