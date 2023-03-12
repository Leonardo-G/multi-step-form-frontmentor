import React, { ChangeEvent, useContext, useEffect, useState } from 'react'

import { FormContext } from '@/context/FormContext'
import { AddOnsTypes } from '@/interfaces/form';
import { returnArray } from '@/utils/arrays';

import { AddOns } from './AddOns';
import { addOnsMonthDB, addOnsYearlyDB } from '../../../db/info';

import { IAddOnsOptions } from '../../../interfaces/form';
import { ButtonBack } from '@/components/UI/ButtonBack';
import { ButtonNext } from '@/components/UI/ButtonNext';

export const SelectExperience = () => {

    const { changeNumberForm, handleFillForm, form, getInfo } = useContext( FormContext );
    const [options, setOptions] = useState<AddOnsTypes[]>([]);

    useEffect(() => {
        setOptions( form.addOns.map( a => a.name ) );

        //eslint-disable-next-line
    }, [ getInfo ])

    useEffect(() => {
        if ( form.timePay === "monthly" && options.length > 0 ) {
            handleFillForm({
                addOns: returnArray( options, addOnsMonthDB ) as IAddOnsOptions[]
            }) 
        }

        if ( form.timePay === "yearly" && options.length > 0 ) {
            handleFillForm({
                addOns: returnArray( options, addOnsYearlyDB ) as IAddOnsOptions[]
            })
            console.log("EJECUTANDO")
        }
    }, [options])

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
            changeNumberForm( number )
        }
    }

    return (
        <>
            <h2 className='fw-bold col-marine-blue'>Pick add-ons</h2>
            <p className='col-cool-gray'>Add-ons help enhance your gaming experience</p>

            <div className='mt-5'></div>
            {
                form.timePay === "monthly" 

                ?
                    addOnsMonthDB.map( a => (
                        <AddOns
                            key={ a.name }
                            options={ options }
                            handleChangeOption={ handleChangeOption }
                            timePay="monthly"
                            { ...a }
                        />
                    ))
                :
                    addOnsYearlyDB.map( a => (
                        <AddOns 
                            key={ a.name }
                            options={ options }
                            timePay="yearly"
                            handleChangeOption={ handleChangeOption }
                            { ...a }
                        />
                    ))
            }

            <ButtonNext handleClickNextForm={ handleClickNextForm }/>
            <ButtonBack />
        </>
    )
}
