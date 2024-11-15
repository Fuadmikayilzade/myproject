import React from 'react';
import './Services.css';
import Lottie from 'lottie-react';
import motion from './Animation - 1731499066532.json';



function Services() {
  return (
    <div>

      <div className='point7'>
        <div className='motion2'>
      <Lottie style={{height: '500px', width: '800px'}}animationData={motion} loop={true} />        
        </div>

    <div className='services'>
          <div className='servicestext'>Services:</div>
          </div>
      <div className='point6'>

        <div className='flex1'>

<div class="container11">
    <div class="card_box">
        <span></span>
    </div>
</div>


<div class="container11">
    <div class="card_box1">
        <span></span>
    </div>
</div>
        </div>



<div className='flex2'>

<div class="container11">
    <div class="card_box2">
        <span></span>
    </div>
</div>


<div class="container11">
    <div class="card_box3">
        <span></span>
    </div>
</div>
</div>


      </div>

      </div>



    </div>
  );
}

export default Services;
