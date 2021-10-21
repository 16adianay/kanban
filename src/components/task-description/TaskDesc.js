import React, {useRef, useState} from 'react';
import './TaskDesc.css';
import {formatDate} from '../../utils';
import {Link, useRouteMatch} from "react-router-dom";

const TaskDesc = ({tasks, setTasks}) => {
    const match = useRouteMatch();
    const { taskId } = match.params;
    const task = tasks.find(task => task.id === taskId);
    console.log(task)
    const [openEdit, setOpenEdit] = useState(false);
    const newDescription = useRef();

    const editDesc = () => {
        if (newDescription.current.value) {
            setTasks([tasks.find(tas => (tas.id !== taskId)),
                {...tasks.find(tas => (tas.id === taskId)), description: newDescription.current.value}]);
        }
    }

    return (
        <>
            {task ?
                <div className={'task__board'}>
                    <div className={'task__header'}>
                        <h2>{task.title}</h2>
                        <Link to={'/'} className={'button-close'}/>
                    </div>
                    <div className={'task-date'}>{formatDate(task.created)}</div>
                    <div className={'task__description'}>
                        {task.description || "This task has no description"}
                    </div>
                    {!openEdit &&  <button onClick={() => setOpenEdit(true)}>Редактировать описание</button>}
                    {openEdit && <button onClick={editDesc}>Изменить описание</button>}
                    {openEdit && <input placeholder='Введите новое описание' type='text' ref={newDescription}/>}
                </div>
            : <div className={'error-field'}>
                    <div className={'error'}>
                        <h2 className={'task-error'}>Task with id {taskId} not found</h2>
                        <Link to={'/'} className={'button-close'}/>
                    </div>
                    <iframe
                        src="https://giphy.com/embed/3ohA2ZD9EkeK2AyfdK"
                        width="480" height="260"
                        frameBorder="0"
                        className="giphy-embed"
                    />
                </div>
            }
        </>
    );
};

export default TaskDesc;