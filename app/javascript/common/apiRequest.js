const apiRequest = async (url = "", postObj = null, errMsg = null) => {
    try{
        const response = await fetch (url, postObj)
        if (!Response.ok){
            throwError("reload the App")
        }
    }
    catch(err){
        errMsg = err.message
    }
}
export default apiRequest;