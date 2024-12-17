import React from 'react'

import './Home.css';

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1>Stay Organized, <br />Stay Productive</h1>
            <br />
            <p>Keep track of your tasks effortlessly with our simple and intuitive To-Do app. </p> 
            <p>Plan your day, prioritize your goals, </p>
            <p> and never miss a deadline again—because your productivity matters!</p>

            <button className='home-btn'>
                Make todo list
            </button>

        </div>
    </div>
  )
}

export default Home