import React from "react";
import { Card } from "antd";
import background from "../../images/photo-152717693060.jpg";
import SignIn from "./LoginPage/SignIn";

export default function Index() {
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
          
        </Card>
      </div>
    </div>
  );
}
