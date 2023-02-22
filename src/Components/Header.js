import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import "../CSS/Header.css"
import logo from "../Assets/logo.svg"

const Header = () => {
    const hamburger_action = ()=>{
        const hamburger = document.querySelector(".hamburger");
        const hidden_links = document.querySelector(".hidden-links")
        hidden_links.classList.toggle("is-active-links")
        hamburger.classList.toggle("is-active-hamburger")
    }   
    return (
        <>
            <header>
                <img src={logo} alt="" />
                <div className="middle_part">
                    <a className={"visible_links"} href={"#ModelS"}>Model S</a>
                    <a className={"visible_links"} href={"#Model3"}>Model 3</a>
                    <a className={"visible_links"} href={"#ModelX"}>Model X</a>
                    <a className={"visible_links"} href={"#ModelY"}>Model Y</a>
                    <a className={"visible_links"} href={"#SolarPanels"}>Solar Panels</a>
                    <a className={"visible_links"} href={"#SolarRoof"}>Solar Roofs</a>
                </div>
                <div className="right-part">
                    <a className={""} href={"#shop"}>Shop</a>
                    <a className={""} href={"#Account"}>Account</a>
                    <div onClick={hamburger_action} className="hamburger">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </header>
            <div className="hidden-links">
                <button onClick={hamburger_action} className='close_hidden_links' >X</button>
                <a>Model X</a>
                <a>Model Y</a>
                <a>Model S</a>
                <a>Model 3</a>
                <a>Solar Roof</a>
                <a>Solar Panel</a>
                <a>Existing Inventony</a>
                <a>Used Inventory</a>
                <a>Trade-In</a>
                <a>Demo Drive</a>
                <a>Insurance</a>
                <a>Find Us</a>
                <a>Support</a>
                <a>Shop</a>
            </div>
        </>
    )
}

export default Header