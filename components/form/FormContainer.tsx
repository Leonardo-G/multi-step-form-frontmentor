import { FormContext } from '@/context/FormContext'
import React, { useContext, useState } from 'react'
import { PersonalInfo } from './PersonalInfo'

export const FormContainer = () => {
    
    const { numberForm } = useContext( FormContext );

    return (
        <>
            {
                numberForm === 1 &&
                <PersonalInfo/>
            }
        </>
    )
}
