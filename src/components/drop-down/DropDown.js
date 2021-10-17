import React, {useState} from 'react';
import './DropDown.css';

const DropDown = (props) => {
    const {type, allTasks, setTasks} = props;
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState('');

    let source;

    switch (type) {
        case 'ready':
            source = 'backlog';
            break;

        case 'inProgress':
            source = 'ready';
            break;

        default:
            source = 'inProgress';
    }

    const arr = allTasks.filter(task => task.status === source);
    const len = arr.length;

    return (
        <>
            {!isClicked
                ?<button
                    className={`addButton${len === 0? '-disabled' : ''}`}
                    type='text'
                    onClick={() => setIsClicked(true)}
                    disabled={len === 0}
                >&#43; Add card</button>
                :<div className={'drop-down'}>
                    <select className={'drop-down__select'} value={selected} onChange={e => setSelected(e.target.value)}>
                        <option value={''}/>
                        {arr.map(task =>
                        <option className={'drop-down__option'} value={task.title}>{task.title}</option>)
                        }
                    </select>
                    <button className={'drop-down__btn'} onClick={() => {
                        if (selected) {
                            const updatedTasks = allTasks.map(task => {
                                    if(selected === task.title) {
                                        return {...task, status: type}
                                    }
                                    return task
                                }
                            )
                            setTasks(updatedTasks)
                            setIsClicked(false);
                        } else {
                            setIsClicked(false)
                        }
                    }
                    }>Add task</button>
                </div>
            }
        </>
    );
};

export default DropDown;