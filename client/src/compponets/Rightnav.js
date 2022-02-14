import React from "react";
import './right_css.css';

function Rightnav(){
    return(<>
            <div className="rn_container">

             <h4>Registered Customers<br></br><a>____________________________________________________</a>
            </h4>
            {/* <a className="line">__________________________________________________________</a> */}
            
            <a className="title_right">if you have an account with us,please log in.</a><b></b><br></br>
            <label>Email Address*</label>
            <input className="input_email"></input><br></br>
            <label>Password*</label>
            <input className="input_password"></input><br></br>
            <button className="btn_login"> Login</button>
            </div>
           
    </>

    )
}
export default Rightnav;