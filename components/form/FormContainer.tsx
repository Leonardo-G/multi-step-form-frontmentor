import { FormContext } from '@/context/FormContext'
import React, { useContext, useState } from 'react'
import { PersonalInfo } from './PersonalInfo'
import { PlanInfo } from './PlanInfo';

export const FormContainer = () => {
    
    const { numberForm } = useContext( FormContext );

    return (
        <div className='px-5 position-relative w-100'>
            {
                numberForm === 1 &&
                <PersonalInfo />
            }
            {
                numberForm === 2 &&
                <PlanInfo />
            }
        </div>
    )
}
