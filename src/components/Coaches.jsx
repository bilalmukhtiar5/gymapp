import React from 'react'
import coach1 from '../assets/coach-1.webp'
import coach2 from '../assets/coach-2.webp'


const Coaches = () => {
  return (
    <>
    <div className="container-fluid coach-section">
        <div className="row">
            <div className="col">
                <div className='main-container'>
                <h1>JAMES FYLES</h1>
                <p>HEAD COACH</p>
                <p>CROSSFIT LEVEL 2 TRAINER, BRITISH WEIGHTLIFTING LEVEL</p>
                <p>2 COACH</p>
                <p className='trainer-descrip'>I played a range of sports from an early age including football, rugby and hockey, and discovered CrossFit when I was 18.
                I was instantly hooked. I started coaching in 2015 and haven't looked back. The community of CrossFit is so different from 
                the standard gym environment, everyone says hello to each other, no matter their ability or background. Coaching CrossFit has 
                been the most rewarding thing that I've ever done. I love breaking movements and skills down to help people master them, and seeing 
                their reaction when they do something they never thought they could. I also enjoy coaching athletes who wish to take their training further,
                and compete in the sport of CrossFit, designing individualised training programs and PT sessions that target their specific goals.</p>
                </div>
            
            </div>
            <div className="col">
                <img src={coach1} alt="" />
            </div>
        </div>
    </div>


    <div className="container-fluid coach-section">
        <div className="row">
            <div className="col">
                <div className='main-container'>
                <h1>JAMES FYLES</h1>
                <p>HEAD COACH</p>
                <h3>CROSSFIT LEVEL 2 TRAINER, BRITISH WEIGHTLIFTING LEVEL</h3>
                <h3>2 COACH</h3>
                <p>I played a range of sports from an early age including football, rugby and hockey, and discovered CrossFit when I was 18.
                I was instantly hooked. I started coaching in 2015 and haven't looked back. The community of CrossFit is so different from 
                the standard gym environment, everyone says hello to each other, no matter their ability or background. Coaching CrossFit has 
                been the most rewarding thing that I've ever done. I love breaking movements and skills down to help people master them, and seeing 
                their reaction when they do something they never thought they could. I also enjoy coaching athletes who wish to take their training further,
                and compete in the sport of CrossFit, designing individualised training programs and PT sessions that target their specific goals.</p>
            </div>
            </div>
            <div className="col">
                <img src={coach2} alt="" className='w-100'/>
            </div>
        </div>
    </div>



    </>
  )
}

export default Coaches