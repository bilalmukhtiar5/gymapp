import React from 'react'
import logo from '../assets/../assets/footer-logo.png'
import facebook from '../assets/fb.webp'
import instagram from '../assets/insta.webp'

const Footer = () => {
  return (
    <>
        <div className="container-fluid bg-dark footer-main-div">
            <div className="container text-center">
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-1">
                    <h1 className='mt-3'>THE FAMILY</h1>
                <p className='mt-3'>FITLAB</p>
                <br />
                <br />
                <br />
                <img src={logo} alt="" className='w-25' />
               
                </div>
                
                <div className="col-lg-4 col-2 col-sm-6">
                <h1 className='mt-5'>PAGES</h1>
                <p className='mt-3'>HOME</p>
                <p className='mt-3'>MEMBERSHIPS</p>
                <p className='mt-3'>FACILITY</p>
                <p className='mt-3'>CONTACT</p>
                </div>
                
                <div className="col-lg-4 col-3 col-sm-6">
                <h1 className='mt-5'>ADDRESS</h1>
                <p className='mt-3'>XLAB@FITLAB.UK</p>
                <p className='mt-3'>01903 205393</p>
                <p className='mt-3'>XLAB CROSSFIT WORTHING</p>
                <p className='mt-3'>UNIT 17 GUILDBOURNE CENTRE</p>
                <p className='mt-3'>WORTHING</p>
                <p className='mt-3'>WEST SUSSEX</p>
                <p className='mt-3'>BN11 1LZ</p>
                </div>
            </div>
            </div>
            
        <div className="container text-center copy-right-section mt-5">
            <div className="row">
            <div className="col-lg-6">
                <p>©2020 BY FIT LAB. All Rights Reserved. Part of BAHB. Legal.</p>
            </div>
            <div className="col-lg-6 col-sm px-5">
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
            </div>
            </div>
        </div>
        
        
        </div>    
    
    
    
    </>
  )
}

export default Footer