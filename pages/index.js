/* eslint-disable @next/next/no-img-element */
import Dashboard from "../layout/dashboard";
import { Row, Col } from "reactstrap";
import {
  AiOutlineArrowUp,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";
import styles from "../styles/Dashboard.module.css";
import Guard from "../HOC/guard"
import axios from "axios"
import { API_URL } from "../utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CurrencyFormat from "react-currency-format";
import {useDispatch, useSelector} from "react-redux"
import { GET_DATA_USER } from "../redux/actions/usersAction";
import { GET_INCOME } from "../redux/actions/transactionAction";


// export const token = () =>{
//   if(typeof window !== "undefined"){
//     const token = localStorage.getItem("token");
//     return {
//       props: {
//         income: token,
//       },
//     };
//   }
// }

// export async function getServerSideProps(token) {
//   console.log(token)
//   return {
//     props: {
//       income: token,
//     },
//   };
// }

const Home = () => {
  const [data, setData] = useState()
  const [income, setIncome]=useState()
  const [expense, setExpense] = useState()
  const [history, setHistory] = useState()
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector(store => store.users)
  const transaction = useSelector(store => store.transaction)
  const getIncome = () =>{
    // const headers = {
    //   token
    // }
    dispatch(GET_INCOME())
    // axios.get(`${API_URL}/income`, {headers})
    // .then((response)=>{
    //   const totalIncome = response.data.result;
    //   const total = totalIncome
    //     .map((item) => item.amount)
    //     .reduce((prev, next) => prev + next);
    //   setIncome(total)
    // }).catch((err)=>{
    //   console.log(err)
    // })
  }
  const totalIncome = () =>{
    if(transaction.income.length <= 0){
      setIncome(0)
    }else{
      const total = transaction.income
        .map((item) => item.amount)
        .reduce((prev, next) => prev + next);
      setIncome(total);
    }
  }
  const getExpense = (token) =>{
    const headers = {
      token,
    };
    axios.get(`${API_URL}/spending`, {headers})
    .then((response)=>{
      const totalExpense = response.data.result;
      const total = totalExpense
        .map((item) => item.amount)
        .reduce((prev, next) => prev + next);
      setExpense(total)
    }).catch((err)=>{
      console.log(err)
    })
  }
  // const transaction = (token) =>{
  //   const headers = {
  //     token,
  //   };
  //   axios
  //     .get(`${API_URL}/transaction`, { headers })
  //     .then((response) => {
  //       setHistory(response.data.result)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  useState(()=>{
    const token = localStorage.getItem("token")
    dispatch(GET_DATA_USER())
    // const headers = {
    //   token
    // }
    // axios.get(`${API_URL}/user`,{headers})
    // .then((response)=>{
    //   // setData(response.data.result)
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })
    getIncome()
    totalIncome()
    getExpense(token)
    // transaction(token)
  },[])
  console.log(transaction.income)


  return (
    <Dashboard>
      <div className={`${styles.balance} fontFamily bgBlue w-100 p-3 d-flex`}>
        <div className="w-75 text-white">
          {data !== undefined ? (
            <>
              <p className={`${styles.balanceTitle}`}>Balance</p>
              <h1 className={`${styles.balancePrice} fw-bold`}>
                <CurrencyFormat
                  value={data.saldo}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp "}
                />
              </h1>
              <p className={`${styles.balanceNumberPhone}`}>{data.phone}</p>
            </>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        <div className="w-25 d-flex justify-content-center align-items-center flex-column">
          <button
            type=""
            className={`btn fw-bold text-white ${styles.button} mb-2`}
            onClick={() => router.push("/transfer")}
          >
            <AiOutlineArrowUp className="me-2" />
            Transfer
          </button>
          <button
            type=""
            className={`btn fw-bold text-white ${styles.button} `}
            onClick={() => router.push("/topup")}
          >
            <AiOutlinePlus className="me-2" />
            Top Up
          </button>
        </div>
      </div>
      <Row>
        <Col md="6">
          <div className={`mb-2 p-3 bg-white shadow mt-3 ${styles.graphic}`}>
            <div className="d-flex ">
              <div className="w-50">
                <AiOutlineArrowDown
                  style={{
                    color: "#1EC15F",
                    fontSize: "1.5rem",
                    marginBottom: "0.7rem",
                  }}
                />
                <p className="mb-1">Income</p>
                <p className="fw-bold fontFamily">
                  <CurrencyFormat
                    value={income}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp "}
                  />
                </p>

                <p className="fw-bold fontFamily"></p>
              </div>
              <div>
                <AiOutlineArrowUp
                  style={{
                    color: "#FF5B37",
                    fontSize: "1.5rem",
                    marginBottom: "0.7rem",
                  }}
                />
                <p className="mb-1">Expense</p>
                <p className="fw-bold fontFamily">
                  <CurrencyFormat
                    value={expense}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp "}
                  />
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className={`mb-2 p-3 bg-white shadow mt-3 ${styles.graphic}`}>
            <p className="fw-bold fontFamily">Transaction History</p>
            <div className={`${styles.transaction}`}>
              {history === undefined ?(
                <p>Loading ...</p>
              ):(
                history.map((e,i)=>{
                  return (
                    <div key={i} className="d-flex mt-3">
                      <div className={`${styles.transactionProfile}`}>
                          <img src={`${e.type === "Transfer" ? `${API_URL}/${e.senderUsers.image}` : `${API_URL}/${e.receiverUsers.image}`}`}  alt=""  className={`${styles.transactionProfilePic}`} />
                      </div>
                      <div className={`${styles.transactionName}`}>
                        <p className="fw-bold mb-1 fontFamily text-capitalize">{e.type === "Transfer" ?(e.senderUsers.firstName): (e.receiverUsers.firstName) }</p>
                        <p
                          className="fontFamily"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {e.type}
                        </p>
                      </div>
                      <div className={`text-dark ${styles.transactionAmount} fontFamily`}>
                        <CurrencyFormat
                          value={e.amount }
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix="Rp "
                        />
                        
                      </div>
                    </div>
                  );
                })
              )}
              
            </div>
          </div>
        </Col>
      </Row>
    </Dashboard>
  );
};
export default Guard(Home);
