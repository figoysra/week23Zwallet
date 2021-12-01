import { API_URL } from "../../utils";
import axios from "axios";

export const GET_INCOME = () =>{
    return(dispatch)=>{
        const token = localStorage.getItem("token");
        const headers = {
            token : token
        }
        dispatch({
            type : "GET_INCOME_PENDING"
        })
        axios.get(`${API_URL}/income`, { headers })
        .then((response)=>{
            const income = response.data.result;
            const total = income
                .map((item) => item.amount)
                .reduce((prev, next) => prev + next);
            dispatch({
                type : "GET_INCOME_FULFILLED",
                payload: income,
                total: total
            })
        })
        .catch((err)=>{
            dispatch({
                type: "GET_INCOME_REJECTED",
                payload: err.response
            })
        })
    }
} 

export const GET_EXPENSE = ()=>{
    return(dispatch) =>{
        const token = localStorage.getItem("token")
        const headers = {
            token: token,
        }
        dispatch({
            type: "GET_EXPENSE_PENDING"
        })
        axios.get(`${API_URL}/spending`, { headers })
        .then((response)=>{
            const expense = response.data.result;
            const total = expense
                .map((item) => item.amount)
                .reduce((prev, next) => prev + next);
            dispatch({
                type : "GET_EXPENSE_FULFILLED",
                payload: expense,
                total: total
            })
        })
        .catch((err)=>{
            dispatch({
                type: "GET_EXPENSE_REJECTED",
                payload: err.response
            })
        })
    }
}

export const GET_HISTORY = () =>{
    return(dispatch) =>{
        const token = localStorage.getItem("token")
        const headers = {
            token: token,
        }
        dispatch({
            type: "GET_HISTORY_PENDING"
        })
        axios.get(`${API_URL}/transaction`, { headers })
        .then((response)=>{
            const payload = response.data.result;
            dispatch({
                type : "GET_HISTORY_FULFILLED",
                payload
            })
        })
        .catch((err)=>{
            dispatch({
                type: "GET_HISTORY_REJECTED",
                payload: err.response
            })
        })
    }
}

export const HANDLE_TOPUP = (form) =>{
    return new Promise ((resolve,reject)=>{
        const token = localStorage.getItem("token")
        const headers = {
            token : token
        }
        axios.post(`${API_URL}/topup`, form, {headers})
        .then((response)=>{
            resolve(response.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

export const HANDLE_TRANSFER = (id,form) =>{
    return new Promise ((resolve,reject)=>{
        const token = localStorage.getItem("token")
        const headers = {
            token : token
        }
        axios.post(`${API_URL}/transfer/${id}`, form, {headers})
        .then((response)=>{
            resolve(response.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
