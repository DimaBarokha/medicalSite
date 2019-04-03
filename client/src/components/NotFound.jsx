import React, {Component} from "react";
import {NavLink} from 'react-router-dom'
export default function NotFound() {
    return (
        <div className="test">
            <main className="not-found">
                <div id="clouds">
                    <div className="cloud x1"/>
                    <div className="cloud x1_5"/>
                    <div className="cloud x2"/>
                    <div className="cloud x3"/>
                    <div className="cloud x4"/>
                    <div className="cloud x5"/>
                </div>
                <div className='c'>
                    <div className='_404'> 404</div>
                    <hr className="line"/>
                    <div className='_1'>THE PAGE</div>
                    <div className='_2'>WAS NOT FOUND</div>
                    <NavLink className='btn-back' to="/">BACK TO HOME</NavLink>
                </div>
            </main>
        </div>
    );
}

