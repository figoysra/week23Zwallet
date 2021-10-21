import NavbarFooter from "../../layout/navbarFooter"
import styles from "../../styles/Landpage.module.css"
import Image from "next/image";
import phoneImage from "../../public/helperImage/phone.png"


const Landpage = () =>{
    return(
        <NavbarFooter>
            <main>
                <div className='d-flex'>
                    <div className='w-50 ps-5 bg-white pt-4 fontFamily'>
                        <h1 className={styles.title}>Awesome App For Saving <span style={{color : "#6379F4"}}>Time.</span> </h1>
                        <p className={styles.subTitle}>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
                        <button type="" className={`btn fw-bold text-white ${styles.button}`}>Try it free</button>
                    </div>
                    <div className={`w-50 ${styles.phone}`} >
                        <div className={styles.backgroundPhone}/>
                        <div className={styles.phoneImage}>
                            <Image src={phoneImage} alt="Picture zwelte in mobile" width={300} height={560} />
                        </div>
                    </div>
                </div>
                {/* <div className={`${styles.bgAbout} d-flex align-items-center flex-column pt-5 pb-5 ps-5 pe-5 `}>
                    <h1 className={`text-center fw-bold`}><span style={{color : "#6379F4"}}>About</span>  the Application.</h1>
                    <p className={` fontFamily mt-4   ${styles.aboutSubTitle}`}>We have some great features from the application and it’s totally free to use by all users around the world.</p>

                </div> */}
            </main>
        </NavbarFooter>
    )
}
export default Landpage