import React from 'react'
import './AutoView.css'
import VolverBtn from '../components/VolverBtn'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AutoView({ auto }) {
    const { model, image } = auto
    return (
        <>
            <Header />

            <div className='AutoView'>
                <h1>{model}</h1>
                <img src={image} alt={model + " image"} />
                <VolverBtn />
            </div>
            
            <Footer />
        </>
    )
}

export default AutoView