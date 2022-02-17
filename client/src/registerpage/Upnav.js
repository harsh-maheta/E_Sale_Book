import React from "react";
import './Upnav_css.css';
import svg_regi from '../assets/site-logo.svg';
import serch_image_regi from '../assets/search-svgrepo-com.svg';
import shop_regi from '../assets/shop.png';
import arrow_regi from '../assets/breadcrumb-arrow.svg';
import { NavLink } from "react-router-dom";
import { BsSearch, BsFillCartFill } from "react-icons/bs";

const Upnav = () => {
    return (

        <>
        <div className="main_header_regi">

        <img src={svg_regi} alt="logo" className="img_left_regi" />
          
            <nav className="main_nav_regi">
                {/* <a href="/login_regi">Login</a>
                <a href="ar_regi">|</a>
                <a href="/register_regi">Register</a> */}
                <NavLink to="/login" > Login </NavLink>
                <a href="ar">|</a>
                <NavLink to="/register" >  Register </NavLink>
                <a className="a_regi">
                 <BsFillCartFill src={shop_regi} alt="logo2" className="img_shop_regi" />
                  0 Cart </a>
            </nav>
        </div>

            <div className="div_search_regi">
                <input className="input_box_regi" placeholder="what are you looking for..." size={50}></input>
                <button className="btn secondary_regi">
                {/* <img src={serch_image_regi} className="search_regi" alt="logo1"></img> */}
                <BsSearch className="search_regi" alt="logo1"/>
                Search</button>
                <button className=" btn primary_regi"> Cancle</button>


            </div>

          <div className="home_login_regi">
            <ul >
                <li className="li_home_regi">
                    <a>Home &nbsp;</a>
                </li>
                <li className="li_arrow_regi">
                    <a><img src={arrow_regi} alt="logo4" className="arrow_right_regi"></img></a>
                </li>
                <li className="li_login_regi">
                    <a> Create an Account &nbsp;</a>
                </li>
            </ul>
            </div>
           <h4 className="locaa_regi"> Login or Create an Account </h4>
         

        </>
    )
}


export default Upnav;