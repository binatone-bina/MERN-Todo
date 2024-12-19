import React, { useState } from 'react'

import './Todo.css'
import TodoCards from './TodoCards';

import {ToastContainer, toast} from 'react-toastify'
import Update from './Update';

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

        if (Inputs.title ==='' || Inputs.body === '') {
            toast.error('Title or Body should not be empty');
        }
        else{

            setArray([...Array, Inputs])
            setInputs({title: '', body: ''});
            toast.success('Your task is added');
            toast.error('Your task was not saved. Sign in first');

        }
    };

    const del = (id) => {
        Array.splice(id, 1);
        setArray([...Array]);
    }

    const dis = (value) => {
        const ele = document.getElementById('todoUpdate');
        if (ele) {
            ele.style.display = value;
        }else{
            console.log('error')
        }
    }

    return (
        <>
            <div className='todo'>
                <ToastContainer/>
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
                                    <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                        <TodoCards title= { item.title } body= {item.body} id={index} delid={del} display={dis}/>
                                    </div>
                                    
                                ) )}
                            
                        </div>

                        
                    </div>
                </div>

            </div>
            <div id='todoUpdate'>
                <div className="todo-update d-flex align-items-center">
                    <div className="container">
                        <Update display={dis}/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Todo