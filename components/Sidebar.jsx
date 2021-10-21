import styles from '../styles/Sidebar.module.css'
import { Container } from 'reactstrap'
import Image from "next/image";
import phoneImage from "../public/helperImage/phone.png"
import { useRouter } from "next/router";


const Sidebar = () =>{
    const router = useRouter();
    return(
        <div className={`fontFamily ${styles.background}`}>
            <Container className='pt-3 pb-3 pe-5 ps-5' >
                <h1 className={`fw-bold text-white ${styles.sidebarTitle}`} >Zwallet</h1>
                <div className={`pt-2 ps-5 ${styles.sidebarPhone}`} onClick={() => router.push("/landpage")}>
                    <div className={styles.sidebarPhoneImage}>
                        <Image src={phoneImage} alt="Picture zwelte in mobile" width={200} height={380} />
                    </div>
                    <div className={styles.sidebarPhoneImageSec}>
                        <Image src={phoneImage} alt="Picture zwelte in mobile" width={200} height={380} className={styles.sidebarPhoneImage2} />
                    </div>
                </div>
                <div>
                    <h1 className={`fw-bold text-white ps-5 pt-3 ${styles.sidebarSubTitle}`}>App that Covering Banking Needs.</h1>
                <p className={`text-white ps-5 pt-2 ${styles.sidebarSubSubTitle}`}>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
                </div>
            </Container>
        </div>
    )
}
export default Sidebar