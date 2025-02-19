import React from "react";
import {BrowserRouter, NavLink,Route,Routes} from "react-router-dom";
import './navlink.css'
import Products from "./product";
import Home from "./Home";
import Member from "./member";

export default function router3() {
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink to='/'
                    className={({isActive})=>isActive?"active_menu":"menu"}
                    style={({isActive}) => {
                        return{
                            fontWeight:isActive?"bold":""
                        };
                }}>Home</NavLink> -&nbsp;
                <NavLink to='/product'
                    className={({isActive})=>isActive?"active_menu":"menu"}>Products</NavLink>-&nbsp;
                <NavLink to='/member'
                    className={({isActive})=>isActive?"active_menu":"menu"}>member</NavLink>-&nbsp;
                <NavLink to='/contact'
                    className={({isActive})=>isActive?"active_menu":"menu"}>contact</NavLink>

            </nav>
            <Routes style={{mardin: '20px'}}>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Products/>}/>
                <Route path="/member" Component={Member}/>
                <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>}/>
                <Route path="/*" element={<div style={{textAlign:'center'}}>Error 404 Not Found</div>}/>


            </Routes>
            
        </BrowserRouter>
    )
}