import React from 'react'
import  Slider  from '../slider/Slider'
import './home.css'

const Home = () => {
  return (
    <div>
        <div className='container' >
            <div className='banner' ></div>
            <div className='slider' >
                <Slider/>
            </div>
        </div>
    </div>
  )
}

export default Home