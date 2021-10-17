import React, {useState} from 'react';
import './CreateNewTask.css'

const CreateNewTask = (props) => {
    const {addNewTask,  setFormVisible} = props;

    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        if(values.title) {
            addNewTask(values.title, values.description)
        }
        setFormVisible(false)
        //TODO: обработать пустое значение title
    }

    const handleChange = (e) => {
        const field = e.target.name;
        setValues({...values, [field]: e.target.value})
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                className='input'
                id='taskTitle'
                name='title'
                type='text'
                placeholder='New task title...'
                value={values.title}
                onChange={handleChange}
            />
            <textarea
                className='input textarea'
                id='textDescription'
                name='description'
                placeholder='Task description...'
                value={values.description}
                onChange={handleChange}
            />
            <button className='submit' type='submit'>Submit</button>
        </form>
    );
};

export default CreateNewTask;