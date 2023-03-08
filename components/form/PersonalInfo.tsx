import React from 'react'

export const PersonalInfo = () => {
    return (
        <div className='px-5 position-relative'>
            <h2 className='fw-bold col-marine-blue'>Personal Info</h2>
            <p className='col-cool-gray'>Please provide your name, email address and phone number.</p>
            
            <div className="mt-5">
                <label className="form-label col-marine-blue fw-medium">Name</label>
                <input 
                    type="text" 
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className="mt-4">
                <label className="form-label col-marine-blue fw-medium">Email Address</label>
                <input 
                    type="email" 
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className="mt-4">
                <label className="form-label col-marine-blue fw-medium">Phone Number</label>
                <input 
                    type="number" 
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className='pos-bottom-right'>
                <button className='btn btn-primary px-3 py-2 fw-medium bg-marine-blue border-0'>Next Step</button>
            </div>
        </div>
    )
}
