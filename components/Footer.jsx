import {Row, Col} from 'reactstrap'
import styles from '../styles/Footer.module.css'
import Image from "next/image";
import phoneImage from "../public/helperImage/phone.png";
import { useEffect, useState } from "react";

const Footer = () =>{
    const [token, setToken] = useState("");
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    return(
        <div className='ps-5 pe-5 pt-4 pb-4 bgBlue'>
            {token === null ? (
                <>
                    <h1 className={`${styles.logo} fw-bold text-white`}>Zwallet</h1>
                    <p className={`text-white fontFamily pt-3 pb-3 ${styles.tag}`}>Simplify financial needs and saving much time in banking needs with one single app.</p>
                    <hr className='text-white' />
                    <Row className='text-white'>
                        <Col xs="6">
                            <p>2020 Zwallet. All right reserved.</p>
                        </Col>
                        <Col xs="6" className='d-flex justify-content-end'>
                            <p className='me-2'>+62 5637 8882 9901</p>
                            <p>contact@zwallet.com</p>
                        </Col>
                    </Row>
                </>
            ):(
                <Row className='text-white'>
                    <Col xs="6">
                        <p>2020 Zwallet. All right reserved.</p>
                    </Col>
                    <Col xs="6" className='d-flex justify-content-end'>
                        <p className='me-2'>+62 5637 8882 9901</p>
                        <p>contact@zwallet.com</p>
                    </Col>
                </Row>
            )}
            
            
        </div>
    )
}
export default Footer