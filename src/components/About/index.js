import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faFigma, faHtml5, faProductHunt, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
          clearTimeout(timeoutId)
        }
      }, [])
    return (
      <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={["About", " ", "Me"]}
                    idx={15}
                    />
                </h1>
                <div>
  <p>
    I am a <strong>B.Tech student specializing in Data Science</strong> under the Computer Science Engineering program at Anurag University, expecting to graduate in <strong>2026</strong>. I am passionate about <strong>machine learning and product design</strong>, where I aim to merge predictive technologies with my <strong>creative ability to design innovative solutions</strong>.
  </p>
  <p>
    I am seeking a challenging role in a <strong>machine-learning-focused product company</strong>, where I can apply my <strong>problem-solving skills</strong> and <strong>innovative thinking</strong> to contribute to <strong>cutting-edge projects</strong>. As I continue expanding my knowledge of machine learning, I am eager to bring fresh ideas and a <strong>creative approach that goes beyond conventional engineering perspectives</strong> to drive meaningful advancements in product development.
  </p>
  <p>
    A <strong>quick learner</strong> by nature, I <strong>created this portfolio in under 24 hours</strong>. I am also an avid reader of research papers, with a recent focus on <strong>Generative AI</strong>, which has captured my interest for its potential in revolutionizing multiple industries.
  </p>
</div>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon = {faReact} color='#61DBFB'/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon = {faFigma} color='##0acf83'/>
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon = {faHtml5} color='#28a4d9'/>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon = {faPython} color='#61DBFB'/>
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon = {faCss3} color='#efd81d'/>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon = {faLightbulb} color='#ecfd28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type = 'pacman'/>
        </>
    )
}

export default About
