import React, { useState } from 'react'

import './Todo.css'
import TodoCards from './TodoCards';

const Todo = () => {

    const [Inputs, setInputs] = useState({title: '', body: ''});
    const [Array, setArray] = useState([]);

    const show = () => {
        const textArea = document.getElementById("textArea");
        
        try {
             textArea.style.display = "block";
        } catch (error) {
            console.log(error)
        }
    }

    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value});
    }

    const submit = () => {
        setArray([...Array, Inputs])
        setInputs({title: '', body: ''});
    }

    return (
        <div className='todo'>
            <div className="todo-main container d-flex justify-content-center align-items-center ">
                
                <div className=" inputs d-flex flex-column w-50">
                    <input value={Inputs.title} name='title' type="text" placeholder='TITLE' className='my-2 p-2 todo-inputs' onClick={show} onChange={change} />
                    <textarea value={Inputs.body} name='body' type="text" id='textArea' placeholder='BODY' className='p-2 mb-2 todo-inputs' onChange={change} />

                    <button className='post-btn' onClick={submit}>
                        Add
                    </button>

                </div>
             
            </div>

            <div className="todo-body">
                <div className="container-fluid">

                    <div className="row mt-4">
                        
                            {Array && Array.map((item, index) =>(
                                <div className="col-lg-3 col-10 mx-5 my-2">
                                    <TodoCards title= { item.title } body= {item.body} />
                                </div>
                                
                            ) )}
                        
                    </div>

                    
                </div>
            </div>

        </div>
    )
}

export default Todo