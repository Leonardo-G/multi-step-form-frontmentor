import React, { FC, useContext } from 'react'

interface Props {
    handleClickNextForm: (number: number) => void
}

export const ButtonNext: FC<Props> = ({ handleClickNextForm }) => {
    
    return (
        <div className='pos-bottom-right'>
            <button 
                className='btn btn-primary px-3 py-2 fw-medium bg-marine-blue border-0'
                onClick={ () => handleClickNextForm( +1 ) }
            >Next Step</button>
        </div>
    )
}
