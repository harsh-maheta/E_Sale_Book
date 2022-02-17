import React from 'react'
import './Downnav_css.css';

const Downnav = () => {
    return (
        <>
            <div className="personal_info">
                <h4>Personal information<br></br><hr></hr>
                    </h4>
                         <a className="title_regi">please enter the following information to create your account.</a>
                            <br></br>

                            <div className="fl">
                            
                             <div className="firstname">
                               <label className="label_first">First Name*</label><br></br>
                                     <input className="first_name"></input>
                                     </div>

                                          <div className="lastname">
                                               <label className="label_last">Last Name*</label>
                                                    <input className="last_name"></input><br></br>
                                               </div>
                                               
                                               </div><br></br>

                                          <div>
                                  <label className="label_email">Email Adress*</label><br></br>
                           <input className="email_adress_regi"></input><br></br>
                     </div>

                <h4>Login information<br></br><hr></hr></h4>
      
          <div className="password_div">

             <label>password*</label><br></br>
                   <input className="password_regi"></input><br></br>
                          </div>
                                <div className="confirm_div">
                                    <label>Confirm Password*</label>
                                            <input className="confirm_password_regi"></input><br></br>
                                                   </div>
                                                          </div>
                                                                
                                                                     </>
                                                                          )
                                                                            }
                                                    export default Downnav;
