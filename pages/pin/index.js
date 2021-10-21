import SignInSignUp from "../../layout/signInSignUp"
import styles from "../../styles/Pin.module.css"
import TextField from "@mui/material/TextField";
import PinInput from "react-pin-input";
import { useState } from "react";
import axios from "axios"
import { API_URL } from "../../utils";
import { useRouter } from "next/router";

const Pin = () =>{
    const router = useRouter()
    const [inputpin, setInputPin] = useState("")
    const [errormsg, setErrorMsg] = useState()
    const changeInput = (value) =>{
        setInputPin(value)
    }
    const handlePin = (e) =>{
        if(inputpin === "" || inputpin.length < 6){
            setErrorMsg("please fill input")
        }else{
            e.preventDefault()
            const id = localStorage.getItem("id")
            const form = {
                pin : inputpin
            }
            axios.put(`${API_URL}/pin/${id}`, form)
            .then((response)=>{
                router.push("/login")
                localStorage.removeItem("id")
            }).catch((error)=>{
                setErrorMsg("Cannot Set Pin")
            })
        }
    }
    return(
        <SignInSignUp>
            <h1 className={`fw-bolder ${styles.title}`}>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h1>
            <p className={styles.subTitle}>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
            <div className='mt-5'>
                <PinInput
                    length={6}
                    focus
                    secret
                    // ref={p => (this.pin = p)}
                    type="text"
                    onChange={changeInput}
                />
                <p>Your Pin : {inputpin}</p>
                {/* <div className={`${styles.pinBox}`}>
                    <TextField id="standard-basic"  variant="standard" onChange={changeInput} type="text"  maxLength="1"/>
                </div>
                <div className={`${styles.pinBox}`}>
                    <TextField id="standard-basic"  variant="standard" />
                </div>
                <div className={`${styles.pinBox}`}>
                    <TextField id="standard-basic"  variant="standard" />
                </div>
                <div className={`${styles.pinBox}`}>
                    <TextField id="standard-basic"  variant="standard" />
                </div>
                <div className={`${styles.pinBox}`}>
                    <TextField id="standard-basic"  variant="standard" />
                </div>
                <div className={`${styles.pinBox}`}>
                    <TextField id="standard-basic"  variant="standard" />
                </div> */}
            </div>
            <p className='text-danger text-capitalize text-center fw-bold'>{errormsg}</p>
            <button onClick={handlePin} type="" className={`fw-bold text-white btn mt-5 ${styles.buttonConfirm}`} >Confirm</button>
        </SignInSignUp>
    )
}

export default Pin    