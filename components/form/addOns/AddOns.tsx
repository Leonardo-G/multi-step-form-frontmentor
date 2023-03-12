import { AddOnsTypes, TimePayTypes } from '@/interfaces/form';
import React, { ChangeEvent, FC } from 'react'

interface Props {
    name: AddOnsTypes;
    price: number;
    options: AddOnsTypes[];
    timePay: TimePayTypes;
    handleChangeOption: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AddOns: FC<Props> = ({ name, price, options, handleChangeOption, timePay }) => {
    return (
        <div className={`${ options.some( o => o === name ) ? "border-purplish " : "border-marine" } rounded p-4 mt-3 d-flex align-items-center`}>
            <input 
                type="checkbox"
                className='me-4'
                value={ name }
                onChange={ handleChangeOption }
                checked={ options.includes( name ) }
            />
            <div className='flex-grow-1'>
                <p className="form-label col-marine-blue fw-bold mb-0">{ name }</p>
                <p className='col-cool-gray'>Access to multiplayer games</p>
            </div>
            <div>
                <p className='col-purplish fw-medium'>
                    +${ price }/{ timePay === "monthly" ? "mo" : "yr" }
                </p>
            </div>
        </div>
    )
}
