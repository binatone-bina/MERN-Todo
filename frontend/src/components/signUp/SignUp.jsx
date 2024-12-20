import React from 'react'
import { useState} from 'react'
import './SignUp.css'
import HeadingComp from './HeadingComp'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const SignUp = () => {

    const history = useNavigate();

    const [Inputs, setInputs] = useState({email: '', username: '', password: ''} );

    const change = (e) => {
        const {name, value} = e.target;
        
        setInputs({...Inputs, [name]: value});
        
    }

    const submit = async (e) => {
       e.preventDefault();
       await axios.post('http://localhost:1000/api/v1/register', Inputs).then((response) => {
            if (response.data.message === 'User already exists') {
                alert(response.data.message);
            }
            else{
                alert(response.data.message);
                setInputs({email: '', username: '', password: ''});
                history('/signIn');
            }
       });
       
       
    }

    return (
        <div className='signUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 column col-right d-flex justify-content-center align-items-center">
                        <div className='d-flex flex-column w-50'>

                            <input name='email' type="email" placeholder='Enter your email' className='p-2 my-3' onChange={change} value={Inputs.email} />
                            <input name='username' type="username" placeholder='Enter your Username' className='p-2 my-3' onChange={change} value={Inputs.username}/>
                            <input name='password' type="password" placeholder='Enter your password' className='p-2 my-3' onChange={change} value={Inputs.password}/>
                            
                            <button className='btn-signUp' onClick={submit}>Sign Up</button>

                        </div>
                    </div>
                    <div className="col-lg-4 col-left d-flex justify-content-center align-items-center column">
                        <HeadingComp first='Sign' second='Up' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SignUp