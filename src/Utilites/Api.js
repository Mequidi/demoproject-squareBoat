const BASE_URL = "https://jobs-api.squareboat.info/api/v1/";
const TOKEN_KEY = "jwt";

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
        // localStorage.setItem(TOKEN_KEY, response.data.token)
        console.log(response)
    })
    .catch(err=>{
        alert(err)
        console.log("something went wrong",err)})
}

export const login = (data,func)=>{
    fetch(BASE_URL+"auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(resp=>resp.json())
    .then(response=>{
        localStorage.setItem(TOKEN_KEY,response.data.token);
        localStorage.setItem("USER_ROLE",response.data.userRole);
        localStorage.setItem("USER_NAME",response.data.name)
        func();
        console.log(response);
    })
    .catch(err=>{
        alert(err)
        console.log("something went wrong",err)})
}

export const getToken = (data,func) =>{
    fetch(BASE_URL+`auth/resetpassword?email=${data}`)
    .then(resp=>resp.json())
    .then(response=>{
        localStorage.setItem(TOKEN_KEY,response.data?.token);
        func();
        checkToken(response.data.token);
    })
    .catch(err=>{
        alert(err)
        console.log(err)})
}

export const checkToken = (data) =>{
    fetch(BASE_URL+`auth/resetpassword/${data}`)
    .then(resp=>resp.json())
    .then(response=>{
        console.log(response.message);
    })
    .catch(err=>{
        alert(err)
        console.log(err)})
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
        console.log(response.message)
    })
    .catch(err=>{
        alert(err)
        console.log(err);
        localStorage.clear();
    })
}

export const createJob = (data,func) =>{
    fetch(BASE_URL+"jobs/", {
        method: "POST",
        body: JSON.stringify({"title": data.title,
        "description": data.description,
        "location": data.location}),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `${data.token}`
        }
    })
    .then(resp=>resp.json())
    .then(response=>{
        console.log(response.success?"success":"failure");
        func();
    })
    .catch(err=>{
        alert(err)
        console.log(err)})
}

export const getPostedJobs=()=>{
    let dataRecieve;
    dataRecieve=fetch(BASE_URL+`/recruiters/jobs`,{
        headers: {
            "Authorization": localStorage.getItem("jwt")
        }
    })
    .then(resp=>resp.json())
    .then(response=>{
        console.log(response.success?"success":"failed");
        console.log(response);
            let dataRecieved = response.data?.data?.map(item=>{
            return {id:item.id,title:item.title,description:item.description,location:item.location}
        })
        return dataRecieved
    })
    .catch(err=>{
        alert(err)
        console.log(err)})
    return dataRecieve;
}
export const getJobCandidates=(data)=>{
    let dataRecieve;
    dataRecieve=fetch(BASE_URL+`/recruiters/jobs/${data.id}/candidates`,{
        headers: {
            "Authorization": `${data.token}`
        }
    })
    .then(resp=>resp.json())
    .then(response=>{
        console.log(response.success?"success":"failed");
        console.log(response)
        let dataRecieved = response.data?.map(item=>{
            return {id:item.id,name:item.name,email:item.email,skills:item.skills}
        })
        console.log(dataRecieved)
        return dataRecieved
    })
    .catch(err=>{
        alert(err)
        console.log(err)})
    return dataRecieve;
}

