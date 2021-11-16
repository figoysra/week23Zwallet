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
            dispatch({
                type : "GET_INCOME_FULFILLED",
                payload: response.data.result
            })
        })
        .catch((err)=>{
            dispatch({
                type: "GET_USER_REJECTED",
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
    }
}
