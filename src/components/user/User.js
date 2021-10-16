import React, {useState} from 'react';
import './User.css';
import userImage from '../../images/user-avatar.png'

const User = () => {
    const [showing, setShowing] = useState(false);

    function handleDrop() {
        setShowing(!showing);
    }

    return (
        <div className='user'>
            <div className='user__drop' onClick={handleDrop}>
                <div className='user__image'><img alt='Аватар' src={userImage}/></div>
                {showing
                    ?<i className='user__down-arrow'/>
                    :<i className='user__up-arrow'/>
                }
            </div>
            {showing?
                <div className='user__select'>
                    <div className={'user__select-item'}>Profile</div>
                    <div className={'user__select-item'}>Log out</div>
                </div>
                : null
            }
        </div>
    );
};

export default User;