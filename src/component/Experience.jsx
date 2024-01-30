import './Experience.css'
import { Helmet } from 'react-helmet'

export default function Experiemce() {

    return (
        <>
            < Helmet >
                <title>experince of gokuthecoder</title>
            </Helmet >
            <div className='header__one'>
                <h1> Experience & Technology</h1>
            </div>
            <div className="main__outer__boxx">
                <div className="certificates">
                    <img src="certificate.png" alt="" />
                </div>
                <div className='details__boxx'>
                    <div>
                        <table>
                            <tr>
                                <th colSpan='2' style={{ textAlign: 'center' }} className='frontend__header'>FrontEnd</th>
                            </tr>
                            <tr>
                                <td><img src="html.svg" alt="" /></td>
                                <th>HTML</th>
                            </tr>
                            <tr>
                                <td><img src="css.svg" alt="" /></td>
                                <th>CSS</th>
                            </tr>
                            <tr>
                                <td><img src="javascript.svg" alt="" /></td>
                                <th>JavaScript</th>
                            </tr>
                            <tr>
                                <td><img src="react.svg" alt="" /></td>
                                <th>React</th>
                            </tr>
                            <tr>
                                <td><img src="tailwind.svg" alt="" /></td>
                                <th>Tailwind</th>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th colSpan='2' style={{ textAlign: 'center' }} className='backend__header'>Backend</th>
                            </tr>
                            <tr>
                                <td><img src="mongo.svg" alt="" /></td>
                                <th>MongoDB</th>
                            </tr>
                            <tr>
                                <td><img src="express.svg" alt="" /></td>
                                <th>Express</th>
                            </tr>
                            <tr>
                                <td><img src="node.svg" alt="" /></td>
                                <th>Node</th>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>
                                    <a href="VishalKumar_Resume.pdf" download='mr_vishal_kumar_resume.pdf' className='resume__downloads' style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}>Download Resume</a>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}