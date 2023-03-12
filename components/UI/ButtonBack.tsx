import { FormContext } from '@/context/FormContext';
import React, { useContext } from 'react'

export const ButtonBack = () => {

    const { changeNumberForm } = useContext( FormContext );
    
    return (
        <div className='pos-bottom-left'>
            <button 
                className='btn btn-light px-3 py-2 fw-medium border-0 col-cool-gray'
                onClick={ () => changeNumberForm( -1 ) }
            >Go Back</button>
        </div>
    )
}
