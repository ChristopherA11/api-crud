import React from 'react'
import MobileList from './MobileList'

const Home = ({mobiles,handleDelete}) => {
  return (
    <div>
        {mobiles.length ? (<MobileList mobiles={mobiles}  handleDelete={handleDelete}/>): <p>Mobile List Is Empty</p>}
    </div>
  )
}

export default Home