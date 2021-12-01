import axios from "axios";
import { API_URL } from "../../utils";


export const HANDLE_LOGIN = (values) =>{
    return new Promise ((resolve, reject)=>{
        // console.log(values)
        axios.post(`${API_URL}/login`, values)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            resolve(response)
        }).catch((error)=>{
            reject(error)
            
        })
    })
}

export const GET_DATA_USER = () =>{
    return (dispatch)=>{
        const token = localStorage.getItem('token')
        const headers = {
            token : token
        } 
        dispatch(usersPending())
        axios.get(`${API_URL}/user`,{headers})
        .then((response)=>{
            dispatch(usersFulfilled(response.data.result))
            // console.log(response.data)
            
        }).catch((err)=>{
            dispatch(usersRejected(err))
            // console.log(err)
        })
    } 
}

export const UPDATE_USER = (form) =>{
    return new Promise((resolve, reject)=>{
        const token = localStorage.getItem("token")
        const headers = {
            "Content-Type" : "multipart/form-data",
            token : token
        }
        axios.put(`${API_URL}/`, form, {headers})
        .then((response)=>{
            resolve(response.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
export const REGISTER_USER = (form) =>{
    return new Promise ((resolve, reject)=>{
        axios.post(`${API_URL}/register`, form)
        .then((response)=>{
            resolve(response.data)
        })
        .catch((err)=>{
            reject(err.response)
        })
    })
}

export const CHECK_PIN = (formPin) =>{
    return new Promise ((resolve,reject)=>{
        const token = localStorage.getItem("token")
        const headers = {
            token : token
        }
        axios.post(`${API_URL}/pin`, formPin, {headers})
        .then((response)=>{
            resolve(response.data)
        })
        .catch((err)=>{
            reject(err.response)
        })
    })
}

export const ALL_USERS = () =>{
    return (dispatch) =>{
        const headers = {
            token: localStorage.getItem("token"),
        }
        dispatch(allPending())
        axios.get(`${API_URL}/users`, { headers })
        .then((response)=>{
            dispatch(allFulfilled(response.data.result))
        })
        .catch((error)=>{
            dispatch(allRejected(error.response))
        })
    }
}




const usersPending = () =>{
    return{
        type : 'GET_USER_PENDING',
    }
}
const usersFulfilled = (payload) =>{
    return{
        type : 'GET_USER_FULFILLED',
        payload
    }
}
const usersRejected = () =>{
    return{
        type : 'GET_USER_REJECTED',
        payload : 'Error'
    }
}

const allPending = () =>{
    return{
        type : 'GET_ALL_PENDING',
    }
}
const allFulfilled = (payload) =>{
    return{
        type : 'GET_ALL_FULFILLED',
        payload
    }
}
const allRejected = (payload) =>{
    return{
        type : 'GET_ALL_REJECTED',
        payload 
    }
}