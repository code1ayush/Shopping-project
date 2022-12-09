import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact">
      <h1 className="contact-heading">
        Contact US
      </h1>
      <div className="in-form">
        <form className='contact-form'>
       <input type="text" className='input' placeholder='Your Name Here' />
      <input type="email" className='input' placeholder='Email'/>
      <input type="text" className='input' placeholder='Subject'/>
       <textarea name="text" id="text" cols="30" rows="10" placeholder='Type your Message here' className='textarea'></textarea>
      <button className='sub-btn'>Submit</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Contact
