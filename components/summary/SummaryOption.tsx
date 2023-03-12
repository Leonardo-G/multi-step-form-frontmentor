import React, { FC } from 'react'

import { AddOnsTypes } from '@/interfaces/form';
import { TimePayTypes } from '@/interfaces/form';

interface Props {
    name: AddOnsTypes;
    price: number;
    timePay: TimePayTypes;
}

export const SummaryOption: FC<Props> = ({ name, price, timePay }) => {
    return (
        <div className='d-flex justify-content-between mt-3'>
            <p className='col-cool-gray'>{ name }</p>
            <p className='col-marine-blue fw-medium'>
                +${ price }/{ timePay === "monthly" ? "mo" : "yr" }</p>
        </div>
    )
}
