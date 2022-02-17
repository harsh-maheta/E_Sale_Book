import React from "react";
import './H1.css';
import svg from '../assets/site-logo.svg';
// import serch_image from '../assets/search-svgrepo-com.svg';
import {BsSearch} from 'react-icons/bs';
import shop from '../assets/shop.png';
import arrow from '../assets/breadcrumb-arrow.svg';
import { Link, NavLink } from "react-router-dom";

const Harsh = () => {
    return (

        <>
        <div className="main_header">

        <img src={svg} alt="logo" className="img_left" />
           
            <nav className="main_nav">
                {/* <a href="/login">Login</a>
                <a href="/register">Register</a> */}
                <NavLink to="/login" > Login </NavLink>
                <a href="ar">|</a>
                <NavLink to="/register" >  Register </NavLink>
                <a className="a_"> <img src={shop} alt="logo2" className="img_shop" /> 0 Cart </a>
            </nav>
        </div>

            <div className="div_search">
                <input className="input_box" placeholder="what are you looking for..." size={50}></input>
                <button className="btn secondary">
                {/* <img src={serch_image} className="search" alt="logo1"></img> */}
                <BsSearch className="search" alt="logo1"/>
                Search</button>
                <button className=" btn primary"> Cancle</button>


            </div>

          <div className="home_login">
            <ul >
                <li className="li_home">
                    <a>Home &nbsp;</a>
                </li>
                <li className="li_arrow">
                    <a><img src={arrow} alt="logo4" className="arrow_right"></img></a>
                </li>
                <li className="li_login">
                    <a>Login &nbsp;</a>
                </li>
            </ul>
            </div>
           <h4 className="locaa"> Login or Create an Account </h4>
         

        </>
    )
}


export default Harsh;