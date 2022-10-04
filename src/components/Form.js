import './FormStyles.css';

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
    <form action='https://formsubmit.co/danlake2012@gmail.com' method='post'>
        <label>Your Name</label>
        <input type='name' name='your name'></input>
        <label>Email</label>
        <input type='email' name='email address'></input>
        <label>Subject</label>
        <input type='text' name='text'></input>
        <label>Message</label>
        <textarea type='text' name='text' rows='6' placeholder='Type Your Message'/>
        
        <button className='btn'>Submit</button>
    </form>
    
    </div>
  )
}

export default Form