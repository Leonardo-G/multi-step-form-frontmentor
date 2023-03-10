import React, { FocusEvent, FormEvent, useState } from 'react'

export const PersonalInfo = () => {

    const [inputsValues, setInputsValues] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChangeColor = (event: FocusEvent<HTMLInputElement>) => {
        
        event.target.classList.add("border-purplish");
    }

    const handleBlurInput = (event: FocusEvent<HTMLInputElement>) => {

        event.target.classList.remove("border-purplish");
    }

    const handleInputValue = (event: FocusEvent<HTMLInputElement>) => {
        setInputsValues({
            ...inputsValues,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='px-5 position-relative'>
            <h2 className='fw-bold col-marine-blue'>Personal Info</h2>
            <p className='col-cool-gray'>Please provide your name, email address and phone number.</p>
            
            <div className="mt-5">
                <label className="form-label col-marine-blue fw-medium">Name</label>
                <input 
                    onFocus={ handleChangeColor }
                    onBlur={ handleBlurInput }
                    onInput={ handleInputValue }
                    value={ inputsValues.name }
                    type="text" 
                    name='name'
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className="mt-4">
                <label className="form-label col-marine-blue fw-medium">Email Address</label>
                <input 
                    onFocus={ handleChangeColor }
                    onBlur={ handleBlurInput }
                    onInput={ handleInputValue }
                    value={ inputsValues.email }
                    type="email" 
                    name='email'
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className="mt-4">
                <div className='d-flex justify-content-between text-danger fw-medium'>
                    <label className="form-label col-marine-blue fw-medium">Phone Number</label>
                    <p>The field is required</p>
                </div>
                <input 
                    onFocus={ handleChangeColor }
                    onBlur={ handleBlurInput }
                    onInput={ handleInputValue }
                    value={ inputsValues.phone }
                    type="number" 
                    name='phone'
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className='pos-bottom-right'>
                <button className='btn btn-primary px-3 py-2 fw-medium bg-marine-blue border-0'>Next Step</button>
            </div>
        </div>
    )
}
