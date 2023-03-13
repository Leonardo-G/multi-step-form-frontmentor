import React, { useContext } from 'react'
import { FormContext } from '@/context/FormContext'

import { Summary } from '../../summary/Summary';
import { PlanInfo } from '../plan/PlanInfo';
import { PersonalInfo } from '../PersonalInfo'
import { SelectExperience } from '../addOns/SelectExperience';

import style from "./FormContainer.module.css";

export const FormContainer = () => {
    
    const { numberForm } = useContext( FormContext );

    return (
        <div className={`position-relative w-md-100 px-md-5 px-3 px-sm-4 ${ style['form-container'] }`}>
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
