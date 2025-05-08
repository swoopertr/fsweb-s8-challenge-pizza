import { Link }  from 'react-router-dom'
import './home.css';
export default function Home () {
    return (
        <div className='home'>
         {/*<h1 className='title'>Teknolojik Yemekler</h1> */}
            <img className='home-logo' src='images/iteration-1-images/logo.svg' />
            <p className= 'home-text'>KOD ACIKTIRIR <br/> PİZZA, DOYURUR </p>
            
            <button className='btn' to="/order">ACIKTIM</button>
        </div>
    )

}

