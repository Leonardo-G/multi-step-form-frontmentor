import React, { FC, ReactNode, useState } from 'react'

import { FormContext } from './FormContext';

interface Props {
    children: ReactNode;
}

export const FormProvider: FC<Props> = ({ children }) => {

    const [numberForm, setNumberForm] = useState(1);

    const changeNumberForm = (number: number) => {

        let numberWindowForm = numberForm;
        numberWindowForm += number;

        setNumberForm( numberWindowForm );
    }

    return (
        <FormContext.Provider value={{
            numberForm,

            // METHODS
            changeNumberForm
        }}>
            { children }
        </FormContext.Provider>
    )
}
