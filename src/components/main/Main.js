import React, {useState} from 'react';
import './Main.css'
import Board from "../board/Board";
import { Route, Switch } from "react-router-dom";
import TaskDesc from "../task-description/TaskDesc";

const Main = ({tasks, setTasks}) => {

    return (
        <div className='main'>
            <div className='container main-container'>
                <Switch>
                    <Route path={'/'} exact>
                        <Board tasks={tasks} setTasks={setTasks}/>
                    </Route>
                    <Route path={'/tasks/:taskId'}>
                        <TaskDesc tasks={tasks} setTasks={setTasks}/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Main;