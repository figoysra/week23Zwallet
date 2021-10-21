import SignInSignUp from "../../layout/signInSignUp"
import { FormControl, FilledInput, InputAdornment, IconButton, } from "@mui/material";
import { FaRegEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import styles from '../../styles/SignIn.module.css'
import { API_URL } from "../../utils";
import { useRouter } from "next/router";


const Login = () =>{
    // console.log(API_URL)
    const router = useRouter();
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const [errorMsg, setErrorMsg] = useState("")

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`${API_URL}/login`, values)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            router.push("/")
        }).catch((error)=>{
            setErrorMsg(error.response.data.error);
            // console.log()
        })
    }

    return(
        <SignInSignUp>
            <h1 className={`fw-bolder ${styles.title}`}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
            <p className={styles.subTitle}>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            <FormControl>
                <FilledInput
                    type='email'
                    placeholder='Enter your e-mail'
                    className={`bg-white ps-2 ${styles.input}`}
                    onChange={handleChange('email')}
                    startAdornment={
                        <InputAdornment position="start">
                            <FaRegEnvelope />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <br />
            <FormControl  >
                <FilledInput
                    required
                    placeholder='Enter your password'
                    className={`bg-white ps-2 ${styles.input}`}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    startAdornment={
                        <InputAdornment position="start">
                            <FaLock />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={handleClickShowPassword}>
                                {values.showPassword ? <FaRegEyeSlash /> : <FaRegEye /> }
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <p className='mt-3'>forget password?</p>
            <br />
            <p className="text-danger text-center fw-bold">{errorMsg}</p>
            <button onClick={handleSubmit} className={`btn mt-3 text-white fw-bold ${styles.buttonSignIn}`}>Sign In</button><br />
            <p className={`text-center mt-5 fw-bold ${styles.subsubTitle}`}>Dont Have Account? Let`s <span onClick={()=> router.push("/register")} style={{color: "#6379F4", cursor : "pointer"}}>SignUp</span> </p>
        </SignInSignUp>
    )
}

export default Login    