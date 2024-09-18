import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["Contact", ' ',"Me"]}
              idx={15}
            />
          </h1>
          
      </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact