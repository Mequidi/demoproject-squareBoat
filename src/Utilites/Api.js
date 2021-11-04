const BASE_URL = "https://jobs-api.squareboat.info/api/v1/";

export const register = (data) =>{
    fetch(BASE_URL+"auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(resp=>resp.json())
    .then(response=>{
        localStorage.setItem("userData",JSON.stringify({
            "name":response.data.name,
            "email":response.data.email,
            "id":response.data.id,
            "skills":response.data.skills,
            "userRole":response.data.userRole,
            "token":response.data.token
        }))
    })
    .catch(err=>console.log(err))
    
}

export const login = (data) =>{
    fetch(BASE_URL+"auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(resp=>resp.json())
    .then(response=>{
        localStorage.setItem("userData",JSON.stringify({
            "name":response.data.name,
            "email":response.data.email,
            "id":response.data.id,
            "skills":response.data.skills,
            "userRole":response.data.userRole,
            "token":response.data.token,
            "isLoggedIn":response.success
        }))
    })
    .catch(err=>console.log(err))
}

export const getToken = (data) =>{
    fetch(BASE_URL+`auth/resetpassword?email=${data}`)
    .then(resp=>resp.json())
    .then(response=>{
        localStorage.setItem("userData",JSON.stringify({
            "email":response.data.email,
            "id":response.data.id,
            "token":response.data.token,
        }))
    })
    .catch(err=>console.log(err))
}

export const changePassword = (data) =>{
    fetch(BASE_URL+"auth/resetpassword", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(resp=>resp.json())
    .then(response=>{
        localStorage.setItem("userData",JSON.stringify({
            "name":response.data.name,
            "email":response.data.email,
            "id":response.data.id,
            "skills":response.data.skills,
            "userRole":response.data.userRole,
            "token":response.data.token,
        }))
    })
    .catch(err=>console.log(err))
}

