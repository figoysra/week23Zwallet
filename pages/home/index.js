import Dashboard from "../../layout/dashboard";
import {Row, Col} from "reactstrap"
import { AiOutlineArrowUp, AiOutlinePlus, AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import phone from "../../public/helperImage/phone.png";
import styles from "../../styles/Dashboard.module.css"

const Home = () =>{
    return(
        <Dashboard>
            <div className={`${styles.balance} fontFamily bgBlue w-100 p-3 d-flex`}>
                <div className='w-75 text-white'>
                    <p className={`${styles.balanceTitle}`}>Balance</p>
                    <h1 className={`${styles.balancePrice} fw-bold`}>Rp. 120.000</h1>
                    <p className={`${styles.balanceNumberPhone}`}>0832334873283</p>
                </div>
                <div className='w-25 d-flex justify-content-center align-items-center flex-column'>
                    <button type="" className={`btn fw-bold text-white ${styles.button} mb-2`}>
                        <AiOutlineArrowUp className='me-2' />
                        Transfer
                    </button>
                    <button type="" className={`btn fw-bold text-white ${styles.button} `}> 
                        <AiOutlinePlus className='me-2' />
                        Top Up
                    </button>
                </div>
            </div>
            <Row>
                <Col md="6">
                    <div className={`mb-2 p-3 bg-white shadow mt-3 ${styles.graphic}`}>
                        <div className='d-flex '>
                            <div className='w-50'>
                                <AiOutlineArrowDown style={{color : "#1EC15F" , fontSize: "1.5rem", marginBottom: '0.7rem'}} />
                                <p className='mb-1'>Income</p>
                                <p className='fw-bold fontFamily'>Rp.220.000</p>
                            </div>
                            <div>
                                <AiOutlineArrowUp style={{color : "#FF5B37" , fontSize: "1.5rem", marginBottom: '0.7rem'}} />
                                <p className='mb-1'>Expense</p>
                                <p className='fw-bold fontFamily'>Rp.220.000</p>
                            </div>
                        </div>
                        grafik
                    </div>
                    
                </Col>
                <Col md="6">
                    <div className={`mb-2 p-3 bg-white shadow mt-3 ${styles.graphic}`}>
                        <p className='fw-bold fontFamily'>Transaction History</p>
                        <div className={`${styles.transaction}`}>
                            <div className='d-flex mt-3'>
                                <div className={`${styles.transactionProfile}`}>
                                    <div className={`${styles.transactionProfilePic}`}>
                                        <Image src={phone} alt='profile Picture' />
                                    </div>
                                </div>
                                <div className={`${styles.transactionName}`}>
                                    <p className='fw-bold mb-1 fontFamily'>Samuel</p>
                                    <p className='fontFamily' style={{fontSize: "0.8rem"}}>Accept</p>
                                </div>
                                <div className={`${styles.transactionAmount} fontFamily`}>
                                    +50000
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <div className={`${styles.transactionProfile}`}>
                                    <div className={`${styles.transactionProfilePic}`}>
                                        <Image src={phone} alt='profile Picture' />
                                    </div>
                                </div>
                                <div className={`${styles.transactionName}`}>
                                    <p className='fw-bold mb-1 fontFamily'>Samuel</p>
                                    <p className='fontFamily' style={{fontSize: "0.8rem"}}>Accept</p>
                                </div>
                                <div className={`${styles.transactionAmount} fontFamily`}>
                                    +50000
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <div className={`${styles.transactionProfile}`}>
                                    <div className={`${styles.transactionProfilePic}`}>
                                        <Image src={phone} alt='profile Picture' />
                                    </div>
                                </div>
                                <div className={`${styles.transactionName}`}>
                                    <p className='fw-bold mb-1 fontFamily'>Samuel</p>
                                    <p className='fontFamily' style={{fontSize: "0.8rem"}}>Accept</p>
                                </div>
                                <div className={`${styles.transactionAmount} fontFamily`}>
                                    +50000
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <div className={`${styles.transactionProfile}`}>
                                    <div className={`${styles.transactionProfilePic}`}>
                                        <Image src={phone} alt='profile Picture' />
                                    </div>
                                </div>
                                <div className={`${styles.transactionName}`}>
                                    <p className='fw-bold mb-1 fontFamily'>Samuel</p>
                                    <p className='fontFamily' style={{fontSize: "0.8rem"}}>Accept</p>
                                </div>
                                <div className={`${styles.transactionAmount} fontFamily`}>
                                    +50000
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Dashboard>
    )
}
export default Home