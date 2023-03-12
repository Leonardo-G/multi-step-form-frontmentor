import React, { FC } from 'react'
import Image from 'next/image'
import { PlanTypes } from '@/interfaces/form';

interface Props {
    src?: string;
    name: "arcade" | "advanced" | "pro";
    price: number;

    plan: PlanTypes[];
    handleSelectPlan: ( planName: "arcade" | "advanced" | "pro" ) => void
}

export const Plan: FC<Props> = ({ src, handleSelectPlan, plan, name, price }) => {
    return (
        <div 
            className={`${ plan.some( p => p === name ) ? "border-purplish " : "border-marine" } pointer p-3 rounded border-marine w-100`}
            onClick={ () => handleSelectPlan( name ) }
        >
            <Image
                src={ src! }
                width={ 40 }
                height={ 40 }
                alt="Icono arcade"
            />
            <div className='mt-5'>
                <p className='fw-bold col-marine-blue'>{ name }</p>
                <p className='col-cool-gray'>${ price }/mo</p>
            </div>
        </div>
    )
}
