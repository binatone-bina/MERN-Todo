import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className='about d-flex justify-content-center align-items-center'>
        <div className="container">
            <h1>About Us</h1>
            <div>
                <p>Welcome to todo, your personal productivity companion designed to make task management simple and stress-free. We understand how overwhelming it can be to juggle multiple responsibilities, so we created a tool to help you stay organized, focused, and in control.</p>
                <p>Our intuitive To-Do app allows you to:</p>
                <ul>
                    <li>Create and manage tasks seamlessly.</li>
                    <li>Set priorities to focus on what truly matters.</li>
                    <li>Track your progress and celebrate your achievements.</li>
                </ul>
                <p>
                    Whether you're planning your day, organizing a project, or simply keeping track of personal goals, todo is here to support you every step of the way.
                </p>
                <p>
                    At todo, we believe that productivity is the key to unlocking your potential. Let us help you take the first step towards achieving your dreams—one task at a time!
                </p>
            </div>
        </div>
    </div>
  )
}

export default About