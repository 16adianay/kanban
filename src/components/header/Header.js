import React from "react";
import './Header.css'
import User from "../user/User";

const Header = () => {
    return (
        <header className='header'>
            <div className='header__title'>Awesome Kanban Board</div>
            <User/>
        </header>
    )
}

export default Header;