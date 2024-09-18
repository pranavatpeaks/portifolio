import './index.scss';
import LogoS from '../../../assets/images/logo-s.png'
import { useRef } from 'react'


const Logo = () => {
    return (
        <div className="logo-container">
            <img className='solid-logo' src = {LogoS} alt="P" />

        </div>
    )
}

export default Logo