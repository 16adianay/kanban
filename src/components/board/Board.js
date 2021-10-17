import React, {useState} from 'react';
import './Board.css'
import Item from "../item/Item";
import {LIST_TYPES, LIST_COPY} from "../../config";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const Board = (props) => {
    const {tasks, setTasks} = props;
    const [isSubmit, setSubmit] = useState(false);

    const addNewTask = (title, description) => {
        const newTask = {
            id: generateUniqueID(),
            title: title,
            description: description,
            created: new Date().toISOString(),
            status: LIST_TYPES.BACKLOG
        }
        setTasks([...tasks, newTask]);
    }
    return (
        <div className='board'>
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type);
                    return (
                        <Item
                            type={type}
                            key={type}
                            setTasks={setTasks}
                            title={LIST_COPY[type]}
                            tasks={listTasks}
                            allTasks={tasks}
                            addNewTask={addNewTask}
                            isSubmit= {isSubmit}
                            setSubmit= {setSubmit}
                        />
                    )
            })}
        </div>
    );
};

export default Board;