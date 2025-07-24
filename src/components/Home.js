import React from 'react'
import Description from './Description'
import Photocard from './Photocard'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-child'>
      <Description/>
      <Photocard/>
      </div>
      </div>
  )
}

export default Home
