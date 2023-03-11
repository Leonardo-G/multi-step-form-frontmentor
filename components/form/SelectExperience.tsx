import React, { ChangeEvent, useContext, useEffect, useState } from 'react'

import { FormContext } from '@/context/FormContext'
import { AddOnsTypes } from '@/interfaces/form';

export const SelectExperience = () => {

    const { changeNumberForm, handleFillForm, form, getInfo } = useContext( FormContext );
    const [options, setOptions] = useState<AddOnsTypes[]>([]);

    useEffect(() => {
        setOptions( form.addOns );

        //eslint-disable-next-line
    }, [ getInfo ])

    //Funcion para el manejo del estado OPTIONS.
    const handleChangeOption = (e: ChangeEvent<HTMLInputElement>) => {
        
        //Aclarando al value que vendran el tipado de "AddOnsTypes"
        const valueOption = e.target.value as AddOnsTypes;

        //En caso de que se incluya la opcion en el estado, se quita del arreglo
        if ( options.includes( valueOption ) ) {
            setOptions( options.filter( o => o !== valueOption ) );
            return;
        }

        //Se agrega en caso de que este en el arreglo.
        setOptions([
            ...options,
            valueOption
        ])
    }

    const handleClickNextForm = ( number: number ) => {
        //Comprobar que por lo menos se haya elegido una opcion
        if ( options.length !== 0) {
            
            //En caso de pasar la validación cambiamos la ventana del formulario y agregamos la informacion
            handleFillForm({
                addOns: options
            })
            changeNumberForm( number )
        }
    }

    return (
        <>
            <h2 className='fw-bold col-marine-blue'>Pick add-ons</h2>
            <p className='col-cool-gray'>Add-ons help enhance your gaming experience</p>

            <div className={`${ options.some( o => o === "online-service") ? "border-purplish " : "border-marine" } rounded p-4 mt-5 d-flex align-items-center`}>
                <input 
                    type="checkbox"
                    className='me-4'
                    value="online-service"
                    onChange={ handleChangeOption }
                    checked={ options.includes("online-service") }
                />
                <div className='flex-grow-1'>
                    <p className="form-label col-marine-blue fw-bold mb-0">Online service</p>
                    <p className='col-cool-gray'>Access to multiplayer games</p>
                </div>
                <div>
                    <p className='col-purplish fw-medium'>+$1/mo</p>
                </div>
            </div>

            <div className={`${ options.some( o => o === "larger-storage") ? "border-purplish " : "border-marine" } rounded p-4 mt-4 d-flex align-items-center`}>
                <input 
                    type="checkbox"
                    className='me-4'
                    value="larger-storage"
                    checked={ options.includes("larger-storage") }
                    onChange={ handleChangeOption }
                />
                <div className='flex-grow-1'>
                    <p className="form-label col-marine-blue fw-bold mb-0">Larger storage</p>
                    <p className='col-cool-gray'>Estra 1TB of cloud save</p>
                </div>
                <div>
                    <p className='col-purplish fw-medium'>+$2/mo</p>
                </div>
            </div>

            <div className={`${ options.some( o => o === "custom-profile") ? "border-purplish " : "border-marine" } rounded p-4 mt-4 d-flex align-items-center`}>
                <input 
                    type="checkbox"
                    className='me-4'
                    value="custom-profile"
                    checked={ options.includes("custom-profile") }
                    onChange={ handleChangeOption }
                />
                <div className='flex-grow-1'>
                    <p className="form-label col-marine-blue fw-bold mb-0">Customizable Profile</p>
                    <p className='col-cool-gray'>Custom theme on your profile</p>
                </div>
                <div>
                    <p className='col-purplish fw-medium'>+$2/mo</p>
                </div>
            </div>

            <div className='pos-bottom-right'>
                <button 
                    className='btn btn-primary px-3 py-2 fw-medium bg-marine-blue border-0'
                    onClick={ () => handleClickNextForm( +1 ) }
                >Next Step</button>
            </div>

            <div className='pos-bottom-left'>
                <button 
                    className='btn btn-light px-3 py-2 fw-medium border-0'
                    onClick={ () => changeNumberForm( -1 ) }
                >Go Back</button>
            </div>
        </>
    )
}
