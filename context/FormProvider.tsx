import React, { FC, ReactNode, useState } from 'react'

import { FormContext } from './FormContext';
import { IForm, IFormOptional } from '../interfaces/form';

interface Props {
    children: ReactNode;
}

export const FormProvider: FC<Props> = ({ children }) => {

    const [numberForm, setNumberForm] = useState(1);
    const [form, setForm] = useState<IForm>({
        name: "",
        email: "",
        phone: "",
    })

    const handleFillForm = ( formUser: IFormOptional ) => {
        setForm({
            ...form,
            ...formUser
        })
    }

    const changeNumberForm = (number: number) => {

        let numberWindowForm = numberForm;
        numberWindowForm += number;

        setNumberForm( numberWindowForm );
    }

    return (
        <FormContext.Provider value={{
            numberForm,
            form,

            // METHODS
            handleFillForm,
            changeNumberForm
        }}>
            { children }
        </FormContext.Provider>
    )
}
