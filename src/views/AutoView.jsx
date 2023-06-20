import React from 'react'
import './AutoView.css'
import VolverBtn from '../components/VolverBtn'

function AutoView({auto}) {
    const {model, velocidad, image} = auto
    return (
        <div className='AutoView'>
            <h1>{model}</h1>
            <p>De 0 - 100km/h en <span className='velocidad'>{velocidad}</span></p>
            <img src={image} alt={model + " image"} />

            <VolverBtn />
        </div>
    )
}

export default AutoView