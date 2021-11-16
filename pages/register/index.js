import SignInSignUp from "../../layout/signInSignUp"
import { FormControl, FilledInput, InputAdornment, IconButton, } from "@mui/material";
import { FaRegEnvelope, FaLock, FaRegEye, FaRegEyeSlash, FaRegUser, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import styles from '../../styles/SignIn.module.css'
import axios from "axios"
import { API_URL } from "../../utils";
import { useRouter } from "next/router";
import { REGISTER_USER } from "../../redux/actions/usersAction";

const Register = () =>{
    const router = useRouter();
    const [errormsg, setError] = useState()
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone:"",
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleRegister = (e) =>{
        e.preventDefault()
        if(values.email === "" && values.password === "" || values.phone === "" || values.firstName === "" || values.lastName === "" ){
            setError("please fill the input")
        }else{
            // console.log(`${API_URL}/register`);
            // axios.post(`${API_URL}/register`, values)
            REGISTER_USER(values)
            .then((response)=>{
                localStorage.setItem("id", response.result.id);
                router.push("/pin")
                // console.log(response.data.result.id);
            }).catch((error)=>{
                setError(error.setValuesdata.error);
                // console.log(error)
            })
        }
    }

    return(
        <SignInSignUp>
            <h1 className={`fw-bolder ${styles.title}`}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
            <p className={styles.subTitle}>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            <FormControl >
                <FilledInput
                    placeholder='Enter your firstname'
                    className={`bg-white ps-2 ${styles.input}`}
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    startAdornment={
                        <InputAdornment position="start">
                            <FaRegUser />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl >
                <FilledInput
                    placeholder='Enter your lastname'
                    className={`bg-white ps-2 ${styles.input}`}
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    startAdornment={
                        <InputAdornment position="start">
                            <FaRegUser />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl>
                <FilledInput
                    placeholder='Enter your e-mail'
                    className={`bg-white ps-2 ${styles.input}`}
                    value={values.email}
                    onChange={handleChange('email')}
                    startAdornment={
                        <InputAdornment position="start">
                            <FaRegEnvelope />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl>
                <FilledInput
                    placeholder='Create your password'
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
            <FormControl >
                <FilledInput
                    placeholder='Enter your Number Phone'
                    className={`bg-white ps-2 ${styles.input}`}
                    value={values.phone}
                    onChange={handleChange('phone')}
                    startAdornment={
                        <InputAdornment position="start">
                            <FaPhoneAlt />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <p className="fw-bold text-danger text-capitalize">{errormsg}</p>
            <button onClick={handleRegister} className={`btn mt-2 fw-bold text-white ${styles.buttonSignIn}`}>Sign Up</button><br />
            <p onClick={()=> router.push("/login")} className={`text-center mt-2 fw-bold ${styles.subsubTitle}`}>Already have an Account ? <span style={{color: "#6379F4", cursor : "pointer"}}>Sign In</span> </p>
        </SignInSignUp>
    )
}

export default Register    