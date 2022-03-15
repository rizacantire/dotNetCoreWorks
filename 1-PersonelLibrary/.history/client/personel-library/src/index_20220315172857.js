import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.min.css'
import SignIn from "./components/pages/LoginPage/SignIn";
import background2 from "../../../images/photo-152717693060.jpg";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      <SignIn style={{backgroundImage:`url(${background2})`,backgroundRepeat: 'no-repeat',
    width:'100%',height:"830px",backgroundSize: 'cover', }}/>
     {/* <App />    */}
    </BrowserRouter>
    </Provider>
,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
