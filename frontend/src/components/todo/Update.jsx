import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';

const Update = ({display, update}) => {
    
    const [Inputs, setInputs] = useState({title: update.title || 'Title', body: update.body || 'Body'});
    
    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value});
    }

    const submit = async () => {
        await axios.put(`http://localhost:1000/api/v2/updateTask/${update._id}`, Inputs).then((response) => {
            toast.success('Your task is updated');
        }); 
        display('none');
    }

    useEffect(() => {
        if (update) {
          setInputs({
            title: update.title || '',
            body: update.body || ''
          });
        }
      }, [update]);

    return (
        <div className='upd-page p-5 d-flex flex-column align-items-start'>
            <h3>
                Update your Task
            </h3>
            <input name='title' type="text" onChange={change} className='mt-4' value={Inputs.title}/>
            <textarea name='body' className='mt-2' onChange={change} value={Inputs.body}/>
            <div >
                
                <button className='btn-updbtn my-4' onClick={submit}>
                    Update
                </button>
                <button className='btn-updbtn my-4' onClick={() =>{
                     display('none');
                }}
                >
                    Close
                </button>
            </div>
            
        </div>
    )
}

export default Update