import { FormContext } from '@/context/FormContext';
import React, { FC, FocusEvent, useContext, useEffect, useState } from 'react'

export const PersonalInfo: FC = () => {

    const { changeNumberForm, handleFillForm, form, getInfo } = useContext(FormContext);
    const [isLength, setisLength] = useState(false);
    const [inputsValues, setInputsValues] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [errorInputs, setErrorInputs] = useState({
        name: false,
        email: false,
        phone: false
    })

    useEffect(() => {
        
        //Obtener la info, una vez que se obtenga lo obtenido en local storage{
        setInputsValues({
            name: form.name,
            email: form.email,
            phone: form.phone
        })

        //eslint-disable-next-line
    }, [getInfo])

    const handleChangeColor = (event: FocusEvent<HTMLInputElement>) => {
        
        event.target.classList.add("border-purplish");
    }

    const handleBlurInput = (event: FocusEvent<HTMLInputElement>) => {

        event.target.classList.remove("border-purplish");
    }

    const handleInputValue = (event: FocusEvent<HTMLInputElement>) => {

        setInputsValues({
            ...inputsValues,
            [event.target.name]: event.target.value
        })
        
        if ( event.target.name === "name" && event.target.value.length <= 3 ) {
            setErrorInputs({
                ...errorInputs,
                name: true
            });
            event.target.classList.remove("border-purplish");
            event.target.classList.add("border-error");
            return;
        } 
        
        if ( event.target.name === "email" && event.target.value.length <= 3 ) {
            setErrorInputs({
                ...errorInputs,
                email: true
            });
            event.target.classList.remove("border-purplish");
            event.target.classList.add("border-error");
            return;
        } 
        
        if ( event.target.name === "phone" && event.target.value.length <= 6 ) {
            setErrorInputs({
                ...errorInputs,
                phone: true
            });
            event.target.classList.remove("border-purplish");
            event.target.classList.add("border-error");
            return;
        } 

        setErrorInputs({
            ...errorInputs,
            [event.target.name]: false
        });
        event.target.classList.add("border-purplish");
        event.target.classList.remove("border-error");
    }

    const handleNextForm = () => {
        
        if( inputsValues.email === "" || inputsValues.name === "" || inputsValues.phone === "" ) {
            setisLength( true );
            return;
        }

        setisLength( false );
        /* Comprobando si las entradas cumplen con las validaciones previas en la funcion "handleInputValue", si no lo están, retornara la funcion. */
        if ( errorInputs.email || errorInputs.name || errorInputs.phone ) return;

        //Mandarle los datos al CONTEXT
        handleFillForm({
            ...inputsValues
        })

        //En caso de pasar las validaciones, cambiamos el formulario
        changeNumberForm( +1 )
    }

    return (
        <>
            <h2 className='fw-bold col-marine-blue'>Personal Info</h2>
            <p className='col-cool-gray'>Please provide your name, email address and phone number.</p>
            
            <div className="mt-5">
                <div className='d-flex justify-content-between text-danger fw-medium'>
                    <label className="form-label col-marine-blue fw-medium">Name</label>
                    {
                        isLength && inputsValues.name === "" &&
                        <p>The field is required</p>
                    }
                </div>
                <input 
                    onFocus={ handleChangeColor }
                    onBlur={ handleBlurInput }
                    onInput={ handleInputValue }
                    defaultValue={ form.name }
                    type="text" 
                    name='name'
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className="mt-4">
                <div className='d-flex justify-content-between text-danger fw-medium'>
                    <label className="form-label col-marine-blue fw-medium">Email Address</label>
                    {
                        isLength && inputsValues.email === "" &&
                        <p>The field is required</p>
                    }
                </div>
                <input 
                    onFocus={ handleChangeColor }
                    onBlur={ handleBlurInput }
                    onInput={ handleInputValue }
                    defaultValue={ form.email }
                    type="email" 
                    name='email'
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className="mt-4">
                <div className='d-flex justify-content-between text-danger fw-medium'>
                    <label className="form-label col-marine-blue fw-medium">Phone Number</label>
                    {
                        isLength && inputsValues.phone === "" &&
                        <p>The field is required</p>
                    }
                </div>
                <input 
                    onFocus={ handleChangeColor }
                    onBlur={ handleBlurInput }
                    onInput={ handleInputValue }
                    value={ inputsValues.phone }
                    type="number" 
                    name='phone'
                    className="form-control fw-medium col-marine-blue py-2"
                />
            </div>
            <div className='pos-bottom-right'>
                <button 
                    className='btn btn-primary px-3 py-2 fw-medium bg-marine-blue border-0'
                    onClick={ handleNextForm }
                >Next Step</button>
            </div>
        </>
    )
}
