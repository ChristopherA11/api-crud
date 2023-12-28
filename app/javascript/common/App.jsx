import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Route, Routes } from 'react-router'
import EditMobiles from './EditMobiles'
import Home from './Home'
import Nav from './Nav'
import api from './api'


const App = () => {
  const [mobiles, setMobiles] = useState([])
  
  const fetchMobiles = async () => {
      try{
        const response = await api.get('/mobiles')
        setMobiles(response.data)
        }
      catch(err){
        console.log(err.message);
      }
  }
  useEffect(() => {
    fetchMobiles()
  },[])

  const handleDelete = async (id) => {
    try{
      await api.delete(`/mobiles/${id}`)
      const deletedApp = mobiles.filter(item => item.id !== id)
      setMobiles(deletedApp)
    }
    catch(err){
      console.log(err.message);
    } 
  }



  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home mobiles={mobiles}
       setMobiles={setMobiles}
        handleDelete={handleDelete}/>}/>   
     <Route path='post' element={ <Post mobiles={mobiles} setMobiles={setMobiles}/>}/>
     <Route path="edit/:id" element = {<EditMobiles mobiles={mobiles} setMobiles={setMobiles} />}/>

      </Routes>
    </div>
  )
}

export default App;