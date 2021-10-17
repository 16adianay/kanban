import React, {useState} from 'react';
import './Item.css';
import {LIST_TYPES} from "../../config";
import CreateNewTask from "../form/CreateNewTask";
import { Link } from "react-router-dom";
import DropDown from "../drop-down/DropDown";

const Item = (props) => {
    const {title, type, tasks, addNewTask} = props;

    const [isFormVisible, setFormVisible] = useState(false);

    return (
        <div className={`item ${type}`}>
            <h2 className='itemTitle'>{title}</h2>
            {tasks.length === 0 &&
                <div>No tasks yet</div>
            }
            {tasks.map(task => {
                    return (
                        <Link to={`/tasks/${task.id}`} className={'item__link'}>
                            <div key={task.id} className={'task'}>
                                {task.title}
                            </div>
                        </Link>
                    )
                })
            }
            {type === LIST_TYPES.BACKLOG ?
                !isFormVisible
                    ?<button
                        className='addButton'
                        type='text'
                        onClick={() => setFormVisible(true)}
                    >&#43; Add card</button>
                    :<CreateNewTask addNewTask={addNewTask} setFormVisible={setFormVisible}/>
                :<DropDown {...props}/>
            }
        </div>
    );
};

export default Item;