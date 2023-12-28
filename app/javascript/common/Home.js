import React from 'react'
import MobileList from './MobileList'

const Home = ({mobiles,setMobiles,handleDelete}) => {
  return (
    <div>
        {mobiles.length ? (<MobileList mobiles={mobiles} setMobiles={setMobiles} handleDelete={handleDelete}/>): <p>Mobile List Is Empty</p>}
    </div>
  )
}

export default Home