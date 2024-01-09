import React from 'react'
import MobileList from './MobileList'
import { useSelector } from 'react-redux'

const Home = () => {
  const {mobiles} = useSelector((state) => state.mobiles)
  return (
    <div>
        {mobiles?.length ? (<MobileList mobiles={mobiles} />): <p>Mobile List Is Empty</p>}
    </div>
  )
}

export default Home