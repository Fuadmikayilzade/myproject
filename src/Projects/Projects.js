import React from 'react';
import './Projects.css';
import Lottie from 'lottie-react';
import motion from './Animation - 1731418561949.json';


function Projects() {
  function openNewWindow() {
    window.open('http://localhost:8080/http://127.0.0.1:5500/responsive.html', '_blank'); // Burada URL-ni yeni yol ilə əvəz edin
  }  return (
    <div className='background'>



<div className='projectstext'>


<div class="loader1">
<span>&lt;</span>
<span>Projects</span>
<span>/&gt;</span>
</div> 

</div>


      <div className='flex10'>

      <div className='motion1'>
        <Lottie style={{height: '350px', width: '350px'}}animationData={motion} loop={true} />        
        </div>



        <div className='gap'>

<div className=" w-100% grid grid-cols-2 w-[100%] gap-2 max-[100%]:grid-cols-1 px-3">
      <div className="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
        <p className="text-white text-2xl">20+</p>
        <p className="text-white text-sm">websites</p>
        <svg    className="group-hover:opacity-100 w-12 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300"    style={{enableBackground: 'new 0 0 512 512', color: 'white', float:'right'}}
 data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"></path>
</svg>      </div>
      <div className="group w-full rounded-lg bg-[rgb(41,49,79)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]">
        <p className="text-white text-2xl">100</p>
        <p className="text-white text-sm">ideas</p>
        <svg className="group-hover:opacity-100 w-12 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300"    style={{enableBackground: 'new 0 0 512 512', color: 'white', float:'right'}} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
</svg>      </div>
    </div>




    <div  className="grid grid-cols-2 w-[100%] gap-2 max-[100%]:grid-cols-1 px-3 pt-2">
    <div className="group w-full rounded-lg bg-[rgb(41,49,79)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]">
        <p className="text-white text-2xl">5+</p>
        <p className="text-white text-sm">logo design</p>
        <svg className="group-hover:opacity-100 w-12 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300"    style={{enableBackground: 'new 0 0 512 512', color: 'white', float:'right'}} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"></path>
</svg>      </div>

      <div className="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
        <p className="text-white text-2xl">100+</p>
        <p className="text-white text-sm">photos</p>
        <svg className="group-hover:opacity-100 w-12 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300"    style={{enableBackground: 'new 0 0 512 512', color: 'white', float:'right'}} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
</svg>      </div>
    </div>



        </div>

        <div className='motion'>
        <Lottie style={{height: '350px', width: '350px'}}animationData={motion} loop={true} />        
        </div>

      </div>



      <div class="shine">Websites</div>

      <div className='cardboxes'>

 <div class="cardbox" onClick={openNewWindow}>
    <strong>Website</strong>
    <div class="card__body">
        Get UI elements that help you stand out.
    </div>
    <span>Follow us</span>
</div>

<div class="cardbox">
<strong>Website</strong>
<div class="card__body">
        Get UI elements that help you stand out.
    </div>
    <span>Follow us</span>
</div>

<div class="cardbox">
<strong>Website</strong>
<div class="card__body">
        Get UI elements that help you stand out.
    </div>
    <span>Follow us</span>
</div>


<div class="cardbox">
<strong>Website</strong>
<div class="card__body">
        Get UI elements that help you stand out.
    </div>
    <span>Follow us</span>
</div>

      </div>



      <div className='cardboxes'>
<div class="cardbox">
    <strong>Website</strong>
    <div class="card__body">
        Get UI elements that help you stand out.
    </div>
    <span>Follow us</span>
</div>

<div class="cardbox">
<strong>Website</strong>
<div class="card__body">
        Get UI elements that help you stand out.
    </div>
    <span>Follow us</span>
</div>

<div class="cardbox">
<strong>Website</strong>
<div class="card__body">
        Get UI elements that help you stand out.
    </div>
    <span>Follow us</span>
</div>


<div class="cardbox">
<strong>Website</strong>
<div class="card__body">
        Get UI elements that help you stand out.
    </div>
    <span>Follow us</span>
</div>

      </div>



    </div>
  )
}

export default Projects

