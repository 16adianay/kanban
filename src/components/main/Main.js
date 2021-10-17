import React from 'react';
import './Main.css'
import Board from "../board/Board";
import { Route, Switch } from "react-router-dom";
import TaskDesc from "../task-description/TaskDesc";

const Main = (props) => {
    return (
        <div className='main'>
            <div className='container main-container'>
                <Switch>
                    <Route path={'/'} exact>
                        <Board {...props}/>
                    </Route>
                    <Route path={'/tasks/:taskId'}>
                        <TaskDesc {...props}/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Main;