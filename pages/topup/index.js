import Guard from "../../HOC/guard"
import Dashboard from "../../layout/dashboard"
import styles from "../../styles/Topup.module.css"
import axios from "axios"
import { useState, useEffect } from "react";
import { API_URL } from "../../utils";
import PinInput from "react-pin-input";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Topup = () =>{
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [inputpin, setInputPin] = useState("");
    const [errormsg, setErrorMsg] = useState();
    const [form, setForm] = useState({
        amount: "",
    });
    const changeInput = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };
    const changeInputPin = (value) => {
        setInputPin(value);
    };
    const handleTopup = (e) =>{
        if(inputpin === "" || inputpin.length < 6){
            setErrorMsg("please fill input")
        }else{
            e.preventDefault();
            const token = localStorage.getItem("token");
            const headers = {
                token
            }
            const formPin = {
                pin : inputpin
            }
            axios.post(`${API_URL}/pin`, formPin, {headers})
            .then((response)=>{
                // console.log(response)
                const formTopUp = {
                    amount : parseInt(form.amount)
                }
                // console.log(typeof formTopUp.amount)
                axios.post(`${API_URL}/topup`, formTopUp, { headers })
                .then((response)=>{
                    setModal(!modal);
                    alert("Top Up Success")
                    setErrorMsg("")
                })
                .catch((error)=>{
                    alert("Top up Failed")
                })
            }).catch((error)=>{
                console.log(error.response.data)
                setErrorMsg("Wrong Pin")
            })
        }
    }
    return(
        <Dashboard>
            <main className={`${styles.formBorder} shadow w-100 p-5`}>
                <h1 className={`${styles.titleTopup} fontFamily`}>Top Up</h1>
                <div className='d-flex mt-5 flex-column align-items-center'>
                    <label className={`${styles.titleTopup} fontFamily mb-2`}>Amount</label>
                    <input className={`${styles.inputTopup} fontFamily`} placeholder='Input Top Up Nominal' type="number" onChange={changeInput} name="amount" value={form.amount}  />
                    <button onClick={toggle} type="" className={`${styles.buttonTopup} mt-4 btn fw-bold text-white fontFamily`}>Send</button>
                </div>
                <Modal isOpen={modal} toggle={toggle} className={styles.formBorder}>
                    <ModalHeader toggle={toggle} className="fw-bold fontFamily">Enter Pin to Top Up</ModalHeader>
                    <ModalBody>
                        <p>Enter your 6 digits PIN for confirmation to continue Top Up money. </p>
                        <div className='mt-3 d-flex flex-column'>
                            <PinInput
                                length={6}
                                focus
                                secret
                                // ref={p => (this.pin = p)}
                                type="text"
                                onChange={changeInputPin}
                            />
                            <br />
                            <p className='text-danger text-capitalize fw-bold'>{errormsg}</p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={handleTopup    }>Top Up</Button>{' '}
                    </ModalFooter>
                </Modal>
            </main>
        </Dashboard>
    )
}
export default Guard(Topup)