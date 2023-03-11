import React, { useContext } from 'react';

import { FormContext } from '@/context/FormContext';

export const Summary = () => {

    const { changeNumberForm } = useContext( FormContext );

    return (
        <>
            <h2 className='fw-bold col-marine-blue'>Finishing up</h2>
            <p className='col-cool-gray'>Double-check everithing looks OK before confirming</p>
            
            <div className='mt-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <p className='fw-bold col-marine-blue'>Arcade (Monthly)</p>
                        <p 
                            className='col-cool-gray text-decoration-underline pointer'
                            onClick={ () => changeNumberForm( -2 ) }    
                        >Change</p>
                    </div>
                    <div>
                        <p className='fw-bold col-marine-blue'>$9/mo</p>
                    </div>
                </div>
                <hr className='mt-4'/>
                <div className='d-flex justify-content-between'>
                    <p className='col-cool-gray'>Online service</p>
                    <p className='col-marine-blue fw-medium'>+$1/mo</p>
                </div>
                <div className='mt-3 d-flex justify-content-between'>
                    <p className='col-cool-gray'>Larger storage</p>
                    <p className='col-marine-blue fw-medium'>+$2/mo</p>
                </div>
                <div className='mt-5 d-flex justify-content-between'>
                    <p className='col-cool-gray'>Total (per month)</p>
                    <p className='col-purplish fw-bold fs-4'>+$12/mo</p>
                </div>
            </div>
            <div className='pos-bottom-right'>
                <button 
                    className='btn btn-primary px-3 py-2 fw-medium bg-marine-blue border-0'
                >Next Step</button>
            </div>

            <div className='pos-bottom-left'>
                <button 
                    className='btn btn-light px-3 py-2 fw-medium border-0 col-cool-gray'
                    onClick={ () => changeNumberForm( -1 ) }
                >Go Back</button>
            </div>
        </>
    )
}
