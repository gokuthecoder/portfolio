import { SlBadge } from "react-icons/sl";
import { FaUserGroup } from "react-icons/fa6";
import './About.css'
import { Helmet } from "react-helmet";

export default function About() {
    return (
        <>
            <div className="about__container">
                < Helmet >
                    <title>About page</title>
                </Helmet >
                <h1 className="heading">About Me</h1>
                <div className="container__box">
                    <div className="main__box">
                        <div className="profile__photo">
                            <img src="https://tangerine-hummingbird-1479b6.netlify.app/assets/about-pic.png" alt="" />
                        </div>
                        <div className="content__box">
                            <div className="wrap__box">
                                <div className="experience">
                                    <SlBadge />
                                    <h3>Experience</h3>
                                    <p>6+ Months</p>
                                    <p>Frontend Development</p>
                                </div>
                                <div className="education">
                                    <FaUserGroup />
                                    <h3>Education</h3>
                                    <p>Diploma <b>(Drop Out)</b></p>
                                    <p>12th Comlplete</p>
                                </div>
                            </div>
                            <div className="paragraph">
                                <div className="about__para">Hey , i am Vishal Kumar and i am <b>MERN STACK Developer</b>, i complete <b>6 Months</b> Internship in <b>O7Services.</b>
                                    In Intership i create web-application in MERN TECHNOLOGY.
                                </div>
                                <div className="about__para">
                                    And know i am talk about my Study, my Highest Qualification is <b>12th</b> but after <b>12th</b> , i Qualify <b>Diploma Entrance Exam </b> , complete 1st Semester i decided to drop out College because of <b>Financial Condition</b> . I decided to go to Jalandhar and Work and Study .
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}