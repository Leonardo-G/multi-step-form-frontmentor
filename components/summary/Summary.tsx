import React, { useContext } from 'react';

import { FormContext } from '@/context/FormContext';
import { SummaryOption } from './SummaryOption';
import { ButtonBack } from '../UI/ButtonBack';
import { reducePriceArray } from '../../utils/arrays';

export const Summary = () => {

    const { changeNumberForm, form } = useContext( FormContext );

    return (
        <>
            <h2 className='fw-bold col-marine-blue'>Finishing up</h2>
            <p className='col-cool-gray'>Double-check everithing looks OK before confirming</p>
            
            <div className='mt-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <p className='fw-bold col-marine-blue text-capitalize'>
                            { form.plan[0].name + " " + "(" + form.timePay + ")" }
                        </p>
                        <p 
                            className='col-cool-gray text-decoration-underline pointer'
                            onClick={ () => changeNumberForm( -2 ) }    
                        >Change</p>
                    </div>
                    <div>
                        <p className='fw-bold col-marine-blue'>
                            ${ form.plan[0].price }/{ form.timePay === "monthly" ? "mo" : "yr" }
                        </p>
                    </div>
                </div>
                <hr className='mt-4'/>
                {
                    form.timePay === "monthly" 
                    
                    ?
                        form.addOns.map( a => (
                            <SummaryOption 
                                key={ a.name }
                                timePay="monthly"
                                { ...a }
                            />
                        ))
                    
                    :
                        form.addOns.map( a => (
                            <SummaryOption 
                                key={ a.name }
                                timePay="yearly"
                                { ...a }
                            />
                        ))
                }
            </div>
            <div className='mt-4'>
                <div className='d-flex justify-content-between mt-5'>
                    <p className='col-cool-gray'>
                        Total (per { form.timePay })
                    </p>
                    <p className='col-purplish fw-bold fs-5'>
                        +${ reducePriceArray( form.plan[0].price, form.addOns ) }/{ form.timePay === "monthly" ? "mo" : "yr" }</p>
                </div>
            </div>
            <div className='pos-bottom-right'>
                <button 
                    className='btn btn-primary px-3 py-2 fw-medium bg-marine-blue border-0'
                >Next Step</button>
            </div>

            <ButtonBack />
        </>
    )
}
