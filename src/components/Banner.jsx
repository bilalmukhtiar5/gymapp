import React from 'react'


const Banner = () => {
  return (
    
    <>
      <div className="container-fluid banner">
        <div className="container text-center">
            <h1 className='banner-heading'>XLAB CROSSFIT WORTHING</h1>
            <p className='banner-text'>Welcome to Worthing’s premium 6000 ft² CrossFit facility!</p>
            
            
            <div className="row row-cols-sm-* row-cols-lg-auto">
            
            <form action="" className='form-banner text-center'>
            <h3>Try a FREE CrossFit session</h3>
              <p>Please fill in the form below and we'll call you back ASAP.</p>
            <div className="row gy-2 mt-4">
            <div className="col">
              
            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
            </div>
            <div className="col">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
            
            </div>
            
            </div>
            <div className="row gy-2 mt-3">
            <div className="col">
              
            <input type="text" class="form-control" placeholder="Email Address" aria-label="First name"/>
            </div>
            <div className="col">
            <input type="text" class="form-control" placeholder="Phone Number" aria-label="Last name"/>
            
            </div>
            
            
            </div>
            <button className='btn btn-primary form-button mt-4'>SUBMIT</button>
            </form>
            

            </div>
            
        </div>
      </div>

    </>
  )
}

export default Banner