import './Card.css'
import { Link } from 'react-router-dom'

function Card({
    model = 'Model', 
    velocidad = '0 - 100km/h',
    url
}){
    return(
            <Link to={url} >
                <div className="Card">
                    <h2>{model}</h2>
                    <p>De 0 - 100km/h en <span className='velocidad'>{velocidad}</span></p>
                </div>
            </Link>
    )
}

export default Card