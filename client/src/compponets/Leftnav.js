import React from "react";
import './left_css.css';

function Leftnav() {
    return (
        <>
            <div className="ln_container">

                <h4> New Customer<br></br>
                    <a className="line">______________________________________________________</a>
                </h4>
                {/* <a>__________________________________________________________</a> */}

                <a className="title_left">Registration is free and easy.</a>

                <ul className="option_left">
                    <li>
                        Faster checkout
                         </li>
                         <br></br>
                         
                    <li>
                        Save multiple shipping addresses
                    </li>
                    <br></br>
                    <li>
                        View and track orders and more
                    </li>
                </ul>
                <br>
                </br>
                <br>

                </br>


                <button className="create_account">Create an Account</button>

            </div>
        </>

    )
}
export default Leftnav;