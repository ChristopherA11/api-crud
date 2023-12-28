import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import api from './api'

const EditMobiles = ({mobiles,setMobiles}) => {
    const {id} = useParams()
    console.log(id);
    const mobile = mobiles.find(mobi => (mobi.id).toString() === id)

    const [editMobile, setEditMobile] = useState({
        model:"",
        brand:"",
        price:0,
        spec:""
    })
    const navigate = useNavigate()

    useEffect(() => {
        if (mobile) {
          setEditMobile({
            model: mobile.model,
            brand: mobile.brand,
            price: mobile.price,
            spec: mobile.spec,
          });
        }
      }, []);

      const handleEdit = async (id) =>{
        const updateMobile = {id,editMobile}
        try {
         const response = await api.patch(`/api/v1/mobiles/${id}`,updateMobile)
         const updateMobiles = mobiles.map((mobi) => mobi.id === id ? {...response.data} : mobi)
         setMobiles(updateMobiles)
         navigate('/')
        }    
        catch(err){
         console.log(err.message);
        }
     }
   

    const editModel = (e) => {
        setEditMobile({...editMobile,model:e.target.value})
    }
    const editBrand = (e) => {
        setEditMobile({...editMobile,brand:e.target.value})
    }
    const editPrice = (e) => {
        setEditMobile({...editMobile,price:e.target.value})
    }
    const editSpec = (e) => {
        setEditMobile({...editMobile,spec:e.target.value})
    }
  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Model:</label>
            <input value={editMobile.model} onChange = {editModel}/>
            <label>Brand:</label>
            <input value={editMobile.brand} onChange={editBrand}/>
            <label>Price:</label>
            <input value={editMobile.price} onChange={editPrice}/>
            <label>Spec:</label>
            <input value={editMobile.spec} onChange={editSpec}/>
            <button type='submit' onClick={() => handleEdit(mobile.id)}>submit</button>
        </form>
    </div>
  )
}

export default EditMobiles