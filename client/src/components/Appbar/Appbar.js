import React, { useState } from "react";
import "./Appbar.css";
const AppBar = () => {
    return (
        <div className='appbar-container'>
            <div className='main-app'>
                <div className='logo'>
                    <a href='/'>
                        <img src='' alt='LOGO' className='LOGO-IMAGE' />
                    </a>
                </div>
                <div className='app-items'>
                    <ul className='appy'>
                        <li className='applist-1'>
                            <a href='/' className='applis'>
                                Button-1
                            </a>
                        </li>
                        <li className='applist-1'>
                            <a href='/' className='applis'>
                                Button-2
                            </a>
                        </li>
                        <li className='applist-1'>
                            <a href='/' className='applis'>
                                Button-3
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppBar;
