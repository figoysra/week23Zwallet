import Dashboard from "../../layout/dashboard";
import Guard from "../../HOC/guard";
import styles from "../../styles/Profile.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_USER } from "../../redux/actions/usersAction";
import { API_URL } from "../../utils";


const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.users)
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    image: "",
    lastName: "",
    phone: "",
    previewImage: ""
  })
  
  useEffect(()=>{
    setForm({
      email: user.user.email,
      firstName: user.user.firstName,
      image: user.user.image,
      lastName: user.user.lastName,
      phone: user.user.phone,
    });
  },[user.user])
  useEffect(()=>{
    dispatch(GET_DATA_USER())
  },[])
  return (
    <Dashboard>
      <div className="p-5 bg-white w-100 d-flex justify-content-center">
        <div className={styles.profileContact}>
          <img
            className={styles.profileImage}
            src={`${API_URL}/${form.previewImage === undefined ? form.image : form.previewImage}`}
            alt="contact Profile Picture"
          />
        </div>
      </div>
    </Dashboard>
  );
};
export default Guard(Profile);
