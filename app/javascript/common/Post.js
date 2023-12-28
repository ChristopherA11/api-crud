import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import PostForm from './PostForm'
import api from './api'


const Post = ({mobiles, setMobiles}) => {
  const [addMobiles, setAddMobiles] = useState({
    model:"",
    brand:"",
    price: 0,
    spec: ""
  })
 const navigate = useNavigate()
 
  const handleSubmit = async(e) => {
    e.preventDefault()
    const id = mobiles.length ? mobiles[mobiles.length - 1].id + 1: 1;
    const allMobile = {id,addMobiles}
    try{
      const response = await api.post('/mobiles',allMobile)
      const mobile = [...mobiles,response.data]
      setMobiles(mobile)
      navigate("/")
    }
    catch(err){
      console.log(err.message);
    }
    }
  return (
    <div>
  
     <PostForm addMobiles={addMobiles} setAddMobiles={setAddMobiles} handleSubmit={handleSubmit}/>
    
    </div>
  )
}

export default Post