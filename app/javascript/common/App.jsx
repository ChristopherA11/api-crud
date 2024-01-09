import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Route, Routes } from 'react-router'
import EditMobiles from './EditMobiles'
import Home from './Home'
// import api from './api'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMobiles } from '../mobiles/mobileActions'


const App = () => {
  const {mobiles} = useSelector((state) => state.mobiles)
  const dispatch = useDispatch()

  const [addMobiles, setAddMobiles] = useState({
    model:"",
    brand:"",
    price:0,
    spec:""
  })

  useEffect(() => {
    dispatch(fetchMobiles())
  },[dispatch])


  return (
    <div>
      <nav>
        <span><Link to={"/"}>Home</Link></span>
        <span><Link to={"/post"}>Post</Link></span>
      </nav>
      <Routes>
      <Route path="/" element={<Home />}/>   
      <Route path="/post" element={<Post addMobiles={addMobiles} setAddMobiles={setAddMobiles} />}/>
      <Route path="/edit/:id" element={<EditMobiles 
      addMobiles={addMobiles} setAddMobiles={setAddMobiles} mobiles={mobiles} />}/>
      </Routes>
    </div>
  )
}

export default App;