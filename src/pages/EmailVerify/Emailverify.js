import React from 'react'
import "./Emailverify.css"

function Emailverify() {
  return (
    <div>
        <img className="asset-24x-1" alt="" src={require("../images/logo.png")} />
        <br/>
        <h3 className="topping">
            Welcome On Board
        </h3>
        <div>
            
        <img className="emailverify" src={require("../images/email.jpg")} />
        </div>
        <h3 className="description">
        We are really excited to have you as our partner
        </h3>
        <h3 className="verify">
        Please verify the confirmation mail sent to you on <br/>
your registered mail address
        </h3>
        <button className="buttonss">
            Resend
        </button>
    </div>
  )
}

export default Emailverify