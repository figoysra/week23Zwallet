import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/LayDashboard.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import { MdWindow, MdLogout } from "react-icons/md";
import { AiOutlineArrowUp, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";

const Dashboard = (props) =>{
    const router = useRouter();
    const handleLogOut = () =>{
        localStorage.removeItem("token")
        router.push("/landpage")
    }
    return(
        <>
            <Navbar />
            <main className={`pt-3 vh-100 ${styles.bgDashboard} `}>
                <Container>
                    <Row>
                        <Col xs="4" className={` d-flex justify-content-center`}>
                            <div className={`bg-white ${styles.borderMenu} pt-3 pb-3 fontFamily`}>
                                <Link href="/" passHref={true}>
                                    <div  className={`${router.pathname === "/" ? styles.linkActive : styles.link}`}>
                                        <div className={` ms-4 d-flex align-items-center fw-bold`}>
                                            <MdWindow className={styles.menuIcon} />
                                            Dashboard
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/transfer" passHref={true}>
                                    <div  className={`${router.pathname === "/transfer" ? styles.linkActive : styles.link}`}>
                                        <div className={` ms-4 d-flex align-items-center fw-bold`}>
                                            <AiOutlineArrowUp className={styles.menuIcon} />
                                            Transfer
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/topup" passHref={true}>
                                    <div  className={`${router.pathname === "/topup" ? styles.linkActive : styles.link}`}>
                                        <div className={` ms-4 d-flex align-items-center fw-bold`}>
                                            <AiOutlinePlus className={styles.menuIcon} />
                                            Top Up
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/profile" passHref={true}>
                                    <div  className={`${router.pathname === "/profile" ? styles.linkActive : styles.link}`}>
                                        <div className={` ms-4 d-flex align-items-center fw-bold`}>
                                            <AiOutlineUser className={styles.menuIcon} />
                                            Profile
                                        </div>
                                    </div>
                                </Link>
                                <div className={`${styles.logOut} d-flex align-items-end`}>
                                    <Link href="#" passHref={true}>
                                        <div onClick={handleLogOut}  className={`${router.pathname === "#" ? styles.linkActive : styles.link}`}>
                                            <div className={` ms-4 d-flex align-items-center fw-bold`}>
                                                <MdLogout className={styles.menuIcon} />
                                                Log Out
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs="8">
                            {props.children}
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    )
}
export default Dashboard