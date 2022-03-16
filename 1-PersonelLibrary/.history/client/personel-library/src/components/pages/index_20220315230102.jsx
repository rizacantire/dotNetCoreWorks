import React ,{useState}from "react";
import { Button, Card } from "antd";
import background from "../../images/photo-152717693060.jpg";
import SignIn from "./LoginPage/SignIn";
import SignUp from "./LoginPage/SignUp";

export default function Index() {
    const [isSingUp, setIsSingUp] = useState(false)
  return (
    <div
      style={{backgroundImage: `url(${background})`,backgroundRepeat: "no-repeat",width: "100%",height: "900px",
              backgroundSize: "cover",}}
    >
      <div style={{ paddingTop: "150px" }}>
        <Card style={{width: 900, margin: "auto", backgroundColor: "transparent", border: "none",}}>
          <h1 style={{ textAlign: "center", fontFamily: "Cursive" }}>
            Giriş Ekranı
          </h1>
         <SignIn/>
         {isSingUp&&<SignUp/>}
        </Card>
      </div>
    </div>
  );
}
