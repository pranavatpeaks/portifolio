import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"
import Loader from 'react-loaders';

const Home =  () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['ranav',' ', 'Kothapalli,'];
    const jobArray = ['product', ' ' ,'-', ' ','design', '','engineer.'];

                    useEffect(() => {
                        const timeoutId = setTimeout(() => {
                          setLetterClass('text-animate-hover')
                        }, 4000)
                        return () => {
                          clearTimeout(timeoutId)
                        }
                      }, [])

                      const [message, setMessage] = useState('This animation is amazing!');

    return(
        <>
        <div className="container home-page">
            <div className = "text-zone">
                <h1>
                    <span className={letterClass}>Hi,</span>
                    <span className={`${letterClass} _12`}></span> <br />
                    <span className={`${letterClass} _13`}>I'm</span>
                    <span className={`${letterClass} _14`}> </span>
                    
<img src={LogoTitle} alt= "developer"/>

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx ={16}
                />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx ={27}
                />
                </h1>
                <h2> Front-End Developer | Figma Designer | Generative AI Researcher |</h2>
                <Link to = "/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type = 'pacman'/>
        </>
    )
}

export default Home