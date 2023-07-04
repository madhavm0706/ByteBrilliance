import { React, useState, useEffect,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./contact-img.svg";
import 'animate.css';
import './Contact.css'
import TrackVisibility from 'react-on-screen';
import skrollr from 'skrollr';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll"
import img1 from '../components/whychooseus/first.png'
import img2 from '../components/whychooseus/second.png'
import img3 from '../components/whychooseus/third.png'
import head from '../components/whychooseus/head.jpg'
import contactimg from '../components/contactus/contact.png'

const ContactSection = () => {

  



  


  
  

  

  return (
    <>





{/* <div className=" whychooseus w-full " id="choose">
  

<div id="page">

<div class="grid-horizontal">
  <div class="grid-block">
    <div class="grid-inner bg-black">
    <div class="container w-3/5 mx-auto flex flex-col items-center justify-center h-screen">
  <img src={head} alt="Image" class="mx-10" />
  <p class="text-center text-white headtext1">WHY CHOOSE US?</p>
  <br></br>
  <p class="text-center text-white headtext2">The pragmatic choice for your business success</p>

</div>

    </div>
  </div>
  <div class="grid-block">
    <div class="grid-inner"><img src={img1} className="w-full"></img></div>
  </div>
  <div class="grid-block">
    <div class="grid-inner"><img src={img2} className="w-full "></img></div>
  </div>
  <div class="grid-block">
    <div class="grid-inner"><img src={img3} className="w-full"></img></div>
  </div>
</div>

</div>


     
</div> */}


       <div className=" contactus   w-full mx-auto">

        <h4 style={{"fontFamily":"MightyShadow"}} className='head text-center mt-[100px] mb-8 '>Contact Us</h4>

        <div class="flex justify-center items-center ">

          <div class="flex flex-col md:flex-row w-11/12 md:w-2/3 lg:w-3/4 bg-black rounded-lg shadow-lg">
            <div class="w-full lg:w-7/12 p-8">
              <form >
                <div class="mb-4">
                  <input style={{"fontFamily":"Hubballi"}} type="text" id="first_name" name="first_name" placeholder="First Name" class="w-full px-4 py-2 bg-black text-white border border-white rounded-lg focus:outline-none focus:border-purple text-[24px]" required />
                </div>
                <br></br>
                <div class="mb-4">
                  <input style={{"fontFamily":"Hubballi"}} type="text" id="last_name" name="last_name" placeholder="Last Name" class="w-full px-4 py-2 bg-black text-white border border-white rounded-lg focus:outline-none text-[24px] " required />
                </div>
                <br></br>

                <div class="mb-4">
                  <input style={{"fontFamily":"Hubballi"}} type="email" id="email" name="email" placeholder="Work Email" class="w-full px-4 py-2 bg-black text-white border border-white rounded-lg focus:outline-none text-[24px] " required />
                </div>
                <br></br>

                <div class="mb-4">
                  <input style={{"fontFamily":"Hubballi"}} type="text" id="job_title" name="job_title" placeholder="Job Title" class="w-full px-4 py-2 bg-black text-white border border-white rounded-lg focus:outline-none text-[24px]" required />
                </div>
                <br></br>

                <div class="mb-4">
                  <input style={{"fontFamily":"Hubballi"}} type="text" id="company" name="company" placeholder="Company" class="w-full px-4 py-2 bg-black text-white border border-white rounded-lg focus:outline-none text-[24px]" required />
                </div>
                <br></br>

                <div class="mb-4">
                  <input style={{"fontFamily":"Hubballi"}} type="text" id="country" name="country" placeholder="Country" class="w-full px-4 py-2 bg-black text-white border border-white rounded-lg focus:outline-none text-[24px]" required />
                </div>
                <br></br>

                <div class="mb-4">
                  <textarea style={{"fontFamily":"Hubballi"}} id="message" name="message" placeholder="Message" class="w-full px-4 py-2 bg-black text-white border border-white rounded-lg focus:outline-none text-[24px] " rows="4" required></textarea>
                </div>
                <br></br>

                <div class="mb-4">
                  <label for="confirm" class="flex items-center">
                    <input type="checkbox" id="confirm" name="confirm" class="mr-2" required />
                    <span style={{"fontFamily":"Hubballi"}} class="text-white text-[18px] sm:text-[20px]">I confirm, I have read and agree to Byte Brilliance’s Privacy Policy and consent to share my information</span>
                  </label>
                </div>
                <div class="flex md:block justify-center md:justify-left">
                  <button class="aboutbtn">
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
            <div class="hidden lg:block w-full md:w-5/12 bg-black">
              <img class="object-cover h-2/3 mt-10" src={contactimg} alt="Contact Image" />
            </div>
          </div >
        </div >
      </div> 





    </>
  )
}
export default ContactSection;