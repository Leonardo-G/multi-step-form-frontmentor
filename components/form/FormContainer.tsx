import React, { useState } from 'react'
import { PersonalInfo } from './PersonalInfo'

export const FormContainer = () => {

    const [formNumber, setFormNumber] = useState(1);

    const handleChangeFormNumber = ( number: number ) => {
        setFormNumber( number )
    }
    return (
        <>
            {
                formNumber === 1 &&
                <PersonalInfo 
                    changeNumber={ handleChangeFormNumber }
                />
            }
        </>
    )
}
