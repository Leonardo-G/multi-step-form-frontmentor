import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { FormContext } from '@/context/FormContext';
import { PlanTypes } from '@/interfaces/form';

export const PlanInfo = () => {

    const { changeNumberForm, handleFillForm, form } = useContext( FormContext );
    const [monthly, setMonthly] = useState( form.timePay === "monthly" ? true : false);
    const [plan, setPlan] = useState<PlanTypes[]>( form.plan )

    const handleSelectPlan = ( planOption: "arcade" | "advanced" | "pro" ) => {

        //Si la opción ya existe, lo quitamos del arreglo
        if ( plan.includes( planOption ) ) {
            setPlan( plan.filter( p => p !== planOption ) );

            return;
        }

        //En caso de que no este, lo agregamos.
        setPlan([
            ...plan,
            planOption
        ])
    }

    const handleClickNextForm = ( number: number ) =>{
        //Comprobar que por lo menos se haya elegido una opcion
        if ( Object.values( plan ).some( s => s ) ) {

            handleFillForm({
                timePay: monthly ? "monthly" : "yearly",
                plan
            })
            
            //En caso de pasar la validación cambiamos la ventana del formulario
            changeNumberForm( number )
        }
    }

    return (
        <>
            <h2 className='fw-bold col-marine-blue'>Select your plan</h2>
            <p className='col-cool-gray'>You have the option of monthly or yearly biling</p>

            <div className='d-flex mt-5 column-gap-3'>
                <div 
                    className={`${ plan.some( p => p === "arcade" ) ? "border-purplish " : "border-marine" } pointer p-3 rounded border-marine w-100`}
                    onClick={ () => handleSelectPlan("arcade") }
                >
                    <Image 
                        src="/assets/icon-arcade.svg"
                        width={ 40 }
                        height={ 40 }
                        alt="Icono arcade"
                    />
                    <div className='mt-5'>
                        <p className='fw-bold col-marine-blue'>Arcade</p>
                        <p className='col-cool-gray'>$9/mo</p>
                    </div>
                </div>

                <div 
                    className={`${ plan.some( p => p === "advanced" ) ? "border-purplish " : "border-marine" } pointer p-3 rounded border-marine w-100`}
                    onClick={ () => handleSelectPlan("advanced") }
                >
                    <Image 
                        src="/assets/icon-advanced.svg"
                        width={ 40 }
                        height={ 40 }
                        alt="Icono advanced"
                    />
                    <div className='mt-5'>
                        <p className='fw-bold col-marine-blue'>Advanced</p>
                        <p className='col-cool-gray'>$12/mo</p>
                    </div>
                </div>

                <div 
                    className={`${ plan.some( p => p === "pro" ) ? "border-purplish " : "border-marine" } pointer p-3 rounded border-marine w-100`}
                    onClick={ () => handleSelectPlan("pro") }
                >
                    <Image
                        src="/assets/icon-pro.svg"
                        width={ 40 }
                        height={ 40 }
                        alt="Icono Pro"
                    />
                    <div className='mt-5'>
                        <p className='fw-bold col-marine-blue'>Pro</p>
                        <p className='col-cool-gray'>$9/mo</p>
                    </div>
                </div>
            </div>

            <div className='d-flex mt-5 justify-content-center column-gap-3'>
                <span>Monthly</span>
                <div 
                    className='switch pointer'
                    onClick={ () => setMonthly( !monthly ) }
                >
                    <div 
                        className={`switch-button ${ !monthly ? "switch-button-on" : "" }`}
                    ></div>
                </div>
                <span>Yearly</span>
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
