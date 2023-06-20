import React from 'react'
import './VolverBtn.css'
import { Link } from 'react-router-dom'

function VolverBtn() {
    return (
        <div className="VolverBtn">
            <Link to='/'><button>Volver</button></Link>
        </div>
    )
}

export default VolverBtn