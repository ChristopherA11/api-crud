const apiRequest = async (url = "", optionObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionObj)
    if (!response.ok) {
      throw Error("Reload the app")
    }
  }
  catch (err) {
    errMsg = err.message
  }
}
export default apiRequest;

// const fetchItem = async () => {
//   try{
//     const response = await fetch(API_URL)
//     if(!response.ok){
//       throw Error ("Data Not Found")
//     }
//     const mobile = await response.json()
//     setMobiles(mobile)
//   }
//   catch(err){
//     console.log(err.message);
//   }
// }


// const handleDelete = async (id) => {
//   const deleteMobile = mobiles.filter(item => item.id !== id)
//   setMobiles(deleteMobile)
//   const deleteOption = {method:"DELETE"}
//   const reqUrl = `${API_URL}/${id}`
//   const result = await apiRequest(reqUrl,deleteOption)
//   if (result){
//     console.log(result);
//   }
// }

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   const id = mobiles.length ? mobiles[mobiles.lenght - 1].id + 1 : 1
//   const addMobile = {id,addMobiles}
//   const updateMobile = [...mobiles,addMobile]
//   setMobiles(updateMobile)
//   Navigate("/")
//   const postOption = {
//     method:"POST",
//     headers:{
//       'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(addMobile)
//   }
//   const result = await apiRequest(API_URL,postOption)
//   if(result){
//     console.log(result);
//   }
// }