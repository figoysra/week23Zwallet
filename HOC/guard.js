import landpage from "../pages/landpage"
import {useRouter} from "next/router"

const Guard = (Component) =>{
    const Result = (props) =>{
        const router = useRouter()
        if(typeof window !== "undefined"){
            const token = localStorage.getItem("token")
            if(!token){
                router.replace("/landpage")
                return null
            }
            return(
                <>
                    <Component {...props} />
                </>
            )
        }
        return null
    }
    return Result
}
export default Guard