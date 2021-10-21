import Sidebar from "../components/sidebar"

const SignInSignUp = (props) =>{
    return(
        <div className='d-flex'>
            <Sidebar />
            <main style={{width : "45%"}} className='pt-5 pb-2 ps-5 fontFamily'>
                {props.children}
            </main>
        </div>
    )
}
export default SignInSignUp;