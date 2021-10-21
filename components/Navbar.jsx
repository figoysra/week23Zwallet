/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Navbar.module.css"
import Router from 'next/router'
import Image from 'next/image'
import phone from '../public/helperImage/phone.png'
import { BiBell } from "react-icons/bi";
import {useEffect, useState} from "react"
import axios from "axios"
import { API_URL } from "../utils"

const Navbar = () =>{
    const [token, setToken] = useState("")
    const [data, setData] = useState()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        setToken(token)
        const headers = {
            token
        }
        axios
            .get(`${API_URL}/user`, { headers })
            .then((response) => {
                setData(response.data.result);
                console.log(response.data.result);
            })
            .catch((error) => {
                console.log(error);
            });  
    },[])

    return(
        <div className='d-flex'>
            <div className={`bgwhite ps-5 pe-5 pt-3 pb-3 d-flex align-items-center fontFamily ${styles.logo}`}>
                <h1 className={`fw-bold ${styles.logoTitle}`}>Zwallet</h1>
            </div>
            {token === null ? (
                <div className={`w-50 ps-5 pe-5 pt-3 pb-3 ${styles.buttonSignInUp} fontFamily d-flex justify-content-end`}>
                    <button type="" onClick={()=> Router.push('/login')} className={`text-white me-2 ${styles.login} fw-bold btn`}>Login</button>
                    <button type="" onClick={()=> Router.push('/register')} className={`${styles.signUp} fw-bold btn`}>Sign Up</button>
                </div>
            ):(
                <>
                    {data === undefined ? (
                        <p>Loading ...</p>
                    ) : (
                        <div className='w-50 ps-5 pe-5 pt-3 pb-3 d-flex  justify-content-end align-items-center'>
                            <div className={styles.profilePic}>
                                <img className={styles.image} src={`${API_URL}/${data.image}`} alt="profile Picture" />
                            </div>
                            <div className='me-3 ms-3'>
                                <h1 className={`fontFamily text-capitalize ${styles.username}`}>{`${data.firstName} ${data.lastName}`}</h1>
                                <p className={styles.phone}>{data.phone}</p>
                            </div>
                            <BiBell className={`ms-3 ${styles.notif} `} />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
export default Navbar