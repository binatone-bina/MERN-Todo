import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'
import HeadingComp from './HeadingComp'
import axios from 'axios'

const SignIn = () => {

    const history = useNavigate();

    const [Inputs, setInputs] = React.useState({email: '', password: ''} );

    const change = (e) => {
        const {name, value} = e.target;
        
        setInputs({...Inputs, [name]: value});
        
    }

    const submit = async (e) => {
       e.preventDefault();
       await axios.post('http://localhost:1000/api/v1/signin', Inputs).then((response) => {
            console.log(response.data);
            
            history('/todo');
       });
       
       
    }

    return (
        <div className='signUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 column col-right d-flex justify-content-center align-items-center">
                        <div className='d-flex flex-column w-50'>

                            <input name='email' onChange={change} type="email" placeholder='Enter your email' className='p-2 my-3' value={Inputs.email} />
                            
                            <input name='password' onChange={change} type="password" placeholder='Enter your password' className='p-2 my-3' value={Inputs.password} />
                            
                            <button className='btn-signUp' onClick={submit}>Sign In</button>

                        </div>
                    </div>
                    <div className="col-lg-4 col-left d-flex justify-content-center align-items-center column">
                        <HeadingComp first='Sign' second='In' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SignIn