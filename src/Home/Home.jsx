import { Link }  from 'react-router-dom'

export default function Home () {
    return (
        <>
        <h1>Teknolojik Yemekler</h1>
        <p>KOD ACIKTIRIR Pizza, DOYURUR</p>
        <Link to="/order">Acıktım</Link>
        </>
    )
}