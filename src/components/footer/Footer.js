import React from 'react';
import './Footer.css'

const Footer = ({tasks}) => {
    return (
        <div className='footer'>
            <div className='container footer-container'>
                <div className='footer__tasks'>
                    <div className='footer__tasks-item1'>Active tasks: {
                        tasks.filter(task => task.status === 'backlog').length
                    }</div>
                    <div className='footer__tasks-item2'>Finished tasks: {
                        tasks.filter(task => task.status === 'finished').length
                    }</div>
                </div>
                <div className='footer_creator'>
                    Kanban board by Diana Gromova, 2021
                </div>
            </div>
        </div>
    );
};

export default Footer;