import React, { useContext } from 'react'
import { FormContext } from '@/context/FormContext'

import { PersonalInfo } from './PersonalInfo'
import { PlanInfo } from './PlanInfo';
import { SelectExperience } from './SelectExperience';
import { Summary } from '../summary/Summary';

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
            {
                numberForm === 3 &&
                <SelectExperience />
            }
            {
                numberForm === 4 &&
                <Summary />
            }
        </div>
    )
}
