import React from 'react';
import './Contact.css';
import Lottie from 'lottie-react';
import motion from './Animation - 1731869205648.json';


function Contact() {
  return (
    <div className='center'>
        <div className='flex11'>
        <Lottie style={{height: '400px', width: '400px', marginTop: '70px'}}animationData={motion} loop={true} />
        <div>

        <div class="shine">Contact</div>

        <div className='mediacenter'>

        <form className="form">
        <div className="flex">
          <label>
            <input required placeholder type="text" className="input" />
            <span>first name</span>
          </label>
          <label>
            <input required placeholder type="text" className="input" />
            <span>last name</span>
          </label>
        </div>  
        <label>
          <input required placeholder type="email" className="input" />
          <span>email</span>
        </label> 
        <label>
          <input required type="tel" placeholder className="input" />
          <span>contact number</span>
        </label>
        <label>
          <textarea required rows={3} placeholder className="input01" defaultValue={""} />
          <span>message</span>
        </label>
        <button className="fancy" href="#">
          <span className="top-key" />
          <span className="text">submit</span>
          <span className="bottom-key-1" />
          <span className="bottom-key-2" />
        </button>
      </form>        
      
        </div>
        </div>

        </div>
        
    </div>
  )
}

export default Contact