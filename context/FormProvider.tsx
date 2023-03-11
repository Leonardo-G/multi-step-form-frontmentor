import React, { FC, ReactNode, useEffect, useState } from 'react'

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
        plan: [],
        timePay: "monthly",
        addOns: []
    })
    const [getInfo, setGetInfo] = useState(false)

    //Hook para rellenar el formulario en caso de que 
    //exista anteriormente
    useEffect(() => {
        const getFormUser = localStorage.getItem( "formUser" )
        
        if ( getFormUser ){
            setForm( JSON.parse( getFormUser ) )
            setGetInfo( true )
        }

    }, [])

    const handleFillForm = ( formUser: IFormOptional ) => {

        const objUser = {
            ...form,
            ...formUser
        }

        setForm( objUser );

        localStorage.setItem( "formUser", JSON.stringify( objUser ) );
    }

    const changeNumberForm = (number: number) => {

        let numberWindowForm = numberForm;
        numberWindowForm += number;

        setNumberForm( numberWindowForm );
    }

    return (
        <FormContext.Provider value={{
            getInfo,
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
