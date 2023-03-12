import React, { useContext, useEffect, useState } from 'react'

import { FormContext } from '@/context/FormContext';
import { planMonthDB, planYearlyDB } from '@/db/info';
import { returnArray } from '@/utils/arrays';

import { PlanTypes, IPlanOptions } from '../../../interfaces/form';
import { Plan } from './Plan';

export const PlanInfo = () => {

    const { changeNumberForm, handleFillForm, form } = useContext( FormContext );
    const [monthly, setMonthly] = useState<boolean>(false);
    const [plan, setPlan] = useState<PlanTypes[]>( [] )

    useEffect(() => {
        if ( monthly && plan.length > 0 ) {
            handleFillForm({
                plan: returnArray( plan, planMonthDB ) as IPlanOptions[],
                timePay: "monthly"
            }) 
        }

        if ( !monthly && plan.length > 0 ) {
            handleFillForm({
                plan: returnArray( plan, planYearlyDB ) as IPlanOptions[],
                timePay: "yearly"
            })
            console.log("EJECUTANDO")
        }

        //eslint-disable-next-line
    }, [ monthly, plan ])
    
    useEffect(() => {
        setPlan( form.plan.map( f => f.name ) )
        setMonthly( form.timePay === "monthly" ? true : false );
    }, [])

    const handleSelectPlan = ( planName: "arcade" | "advanced" | "pro" ) => {

        //Si la opción ya existe, lo quitamos del arreglo
        if ( plan.some( p => p === planName ) ) {
            setPlan( plan.filter( p => p !== planName ) );

            return;
        }

        //En caso de que no este, lo agregamos.
        setPlan([ planName ])
    }

    const handleClickNextForm = ( number: number ) => {
        //Comprobar que por lo menos se haya elegido una opcion
        if ( Object.values( plan ).some( s => s ) ) {

            //En caso de pasar la validación cambiamos la ventana del formulario
            changeNumberForm( number )
        }
    }

    return (
        <>
            <h2 className='fw-bold col-marine-blue'>Select your plan</h2>
            <p className='col-cool-gray'>You have the option of monthly or yearly biling</p>

            <div className='d-flex mt-5 column-gap-3'>
                {
                    monthly &&
                    planMonthDB.map( p => (
                        <Plan 
                            key={ p.name} 
                            handleSelectPlan={ handleSelectPlan }   
                            plan={ plan }
                            timePay="monthly"
                            { ...p }
                        />
                    ))
                }
                {
                    !monthly &&
                    planYearlyDB.map( p => (
                        <Plan 
                            key={ p.name} 
                            handleSelectPlan={ handleSelectPlan }   
                            plan={ plan }
                            timePay="yearly"
                            { ...p }
                        />
                    ))
                }
                
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
