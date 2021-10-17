import React, {useState, useEffect} from "react";
import './App.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
    const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialState);

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main tasks={tasks} setTasks={setTasks}/>
                <Footer tasks={tasks}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
