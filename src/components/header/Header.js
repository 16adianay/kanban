import React from "react";
import './Header.css'
import User from "../user/User";

const Header = () => {
    return (
        <header className='header'>
            <div className='container header-container'>
                <div className='header__title'><h4>Awesome Kanban Board</h4></div>
                <User/>
            </div>
        </header>
    )
}

export default Header;