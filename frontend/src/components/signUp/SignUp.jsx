import React from 'react'

import './SignUp.css'
import HeadingComp from './HeadingComp'

const SignUp = () => {
  return (
    <div className='signUp'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 column col-right d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column w-50'>

                        <input name='email' type="email" placeholder='Enter your email' className='p-2 my-3' />
                        <input name='name' type="username" placeholder='Enter your Username' className='p-2 my-3' />
                        <input name='password' type="password" placeholder='Enter your password' className='p-2 my-3' />
                        
                        <button className='btn-signUp '>Sign Up</button>

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