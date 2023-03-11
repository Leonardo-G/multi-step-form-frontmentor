import React, { ChangeEvent, useContext, useState } from 'react'

import { FormContext } from '@/context/FormContext'

export const SelectExperience = () => {

    const { changeNumberForm } = useContext( FormContext );
    const [options, setOptions] = useState({
        onlineService: false,
        largerStorage: false,
        customProfile: false
    })

    const handleChangeOption = (e: ChangeEvent<HTMLInputElement>) => {
        if ( e.target.value === "online-service" ) {
            setOptions({
                ...options,
                onlineService: !options.onlineService
            })
        }

        if ( e.target.value === "larger-storage" ) {
            setOptions({
                ...options,
                largerStorage: !options.largerStorage
            })
            return;
        }

        if ( e.target.value === "custom-profile" ) {
            setOptions({
                ...options,
                customProfile: !options.customProfile
            })
            return;
        }
    }

    const handleClickNextForm = ( number: number ) =>{
        //Comprobar que por lo menos se haya elegido una opcion
        if ( options.customProfile || options.largerStorage || options.onlineService ) {
            
            //En caso de pasar la validación cambiamos la ventana del formulario
            changeNumberForm( number )
        }
    }

    return (
        <>
            <h2 className='fw-bold col-marine-blue'>Pick add-ons</h2>
            <p className='col-cool-gray'>Add-ons help enhance your gaming experience</p>

            <div className={`${ options.onlineService ? "border-purplish " : "border-marine" } rounded p-4 mt-5 d-flex align-items-center`}>
                <input 
                    type="checkbox"
                    className='me-4'
                    value="online-service"
                    onChange={ handleChangeOption }
                />
                <div className='flex-grow-1'>
                    <p className="form-label col-marine-blue fw-bold mb-0">Online service</p>
                    <p className='col-cool-gray'>Access to multiplayer games</p>
                </div>
                <div>
                    <p className='col-purplish fw-medium'>+$1/mo</p>
                </div>
            </div>

            <div className={`${ options.largerStorage ? "border-purplish " : "border-marine" } rounded p-4 mt-4 d-flex align-items-center`}>
                <input 
                    type="checkbox"
                    className='me-4'
                    value="larger-storage"
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

            <div className={`${ options.customProfile ? "border-purplish " : "border-marine" } rounded p-4 mt-4 d-flex align-items-center`}>
                <input 
                    type="checkbox"
                    className='me-4'
                    value="custom-profile"
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
