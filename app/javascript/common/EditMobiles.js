import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import api from './api'
import PostForm from './PostForm'

const EditMobiles = ({mobiles,setMobiles, addMobiles, setAddMobiles}) => {
    const {id} = useParams()
    const mobile = mobiles.find(mobi => (mobi.id).toString() === id)

    const navigate = useNavigate()

    useEffect(() => {
    
        if (mobile) {
          setAddMobiles({
            model: mobile.model,
            brand: mobile.brand,
            price: mobile.price,
            spec: mobile.spec,
          });
        }
      }, [mobile]);

      const handleEdit = async (id) =>{
        const updateMobile = {id,addMobiles}
        try {
         const response = await api.patch(`/mobiles/${id}`,updateMobile)
         const updateMobiles = mobiles.map((mobi) => mobi.id === id ? {...response.data} : mobi)
         setMobiles(updateMobiles)
         navigate('/')
        }    
        catch(err){
         console.log(err.message);
        }
     }
    
  return (
    <div> 
        <PostForm addMobiles={addMobiles} setAddMobiles={setAddMobiles} handleEdit={handleEdit} mobile={mobile}/>
    </div>
  )
}

export default EditMobiles