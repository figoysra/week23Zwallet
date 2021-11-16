import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { createWrapper } from "next-redux-wrapper"
import store from "../redux/store"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)

// import '../styles/globals.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from "next/app"
// import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper"
// import store from "../redux/store"


// class MyApp extends App {
//   render () {
//     const {Component, pageProps} = this.props
//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
// }

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore)

// export default wrapper.withRedux(MyApp)

