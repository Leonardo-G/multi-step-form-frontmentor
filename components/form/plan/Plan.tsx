import React, { FC } from 'react'
import Image from 'next/image'

import { PlanTypes, TimePayTypes } from '@/interfaces/form';

interface Props {
    src?: string;
    name: "arcade" | "advanced" | "pro";
    price: number;
    timePay: TimePayTypes;

    plan: PlanTypes[];
    handleSelectPlan: ( planName: "arcade" | "advanced" | "pro" ) => void;
}

export const Plan: FC<Props> = ({ src, handleSelectPlan, plan, name, price, timePay }) => {
    return (
        <div 
            className={`${ plan.some( p => p === name ) ? "border-purplish " : "border-marine" } pointer p-3 rounded border-marine w-100 d-flex d-md-block align-items-center column-gap-3`}
            onClick={ () => handleSelectPlan( name ) }
        >
            <Image
                src={ src! }
                width={ 40 }
                height={ 40 }
                alt="Icono arcade"
            />
            <div className='mt-md-5 mt-0'>
                <p className='fw-bold col-marine-blue'>{ name }</p>
                <p className='col-cool-gray'>
                    ${ price }/{ timePay === "monthly" ? "mo" : "yr" }
                </p>
                {
                    timePay === "yearly" &&
                    <p className='col-marine-blue fw-medium mt-1'>2 month free</p>
                }
            </div>
        </div>
    )
}
