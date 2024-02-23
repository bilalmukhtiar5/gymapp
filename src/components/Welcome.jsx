import React from 'react'
import logo from '../assets/crossfit_corp_logo.webp'
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'

const Welcome = () => {
  return (
    <>
    <div className="container-fluid text-center">
        <h1 className='welcome-heading'>WELCOME TO XLAB</h1>
        <img src={logo} alt="" />
        <div className='container mt-5 px-5 family_text'>
        <p>Welcome to Worthing’s premium 6000 ft² CrossFit facility. We offer safe and effective exercise in a fun and inclusive
            atmosphere that will keep you engaged and will enable you to constantly progress with your health and fitness goals.</p>
            <p>We offer a variety of enjoyable group sessions suitable for all abilities, including our Workout of the Day (WOD), 
            Aerobic Capacity and Olympic Weightlifting. We also offer specific Beginners CrossFit sessions for individuals who see themselves
            as unfit or inexperienced. Every session here is coach-led, meaning you receive in-depth explanation, demonstration and feedback 
            from our experienced, fully qualified coaches. We also offer open gym slots for more advanced athletes to practice skills and lift
            at their own pace within the facility.</p>
            <p>New to fitness? Don't worry! CrossFit is accessible to everyone and we all have to start somewhere. Our expert coaches will 
            teach you how to scale and adapt every workout to accommodate your current fitness level. Get in contact with us to start your
            journey today!</p>
            </div>
    </div>
    <div className="container-fluid mt-5">
    <div className="row">
    <div className="col-lg-3">
        <img src={img1} alt="" />
    </div>
    <div className="col-lg-3">
        <img src={img2} alt="" />
    </div>
    <div className="col-lg-3">
        <img src={img3} alt="" />
    </div>
    <div className="col-lg-3">
        <img src={img4} alt="" />
    </div>
    </div> 
    </div>
    
    
    
    </>
  )
}

export default Welcome