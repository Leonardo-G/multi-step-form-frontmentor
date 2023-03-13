import Image from 'next/image'
import React from 'react'

export const Confirm = () => {
    return (
        <div className='d-flex justify-content-center mt-5 flex-column align-items-center row-gap-3'>
            <Image 
                src="/assets/icon-thank-you.svg"
                alt="thank you image"
                width={ 60 }
                height={ 60 }
            />
            <h3 className='fw-bold col-marine-blue'>Thank you!</h3>
            <p className='text-center fs-5 col-cool-gray fw-medium'>
                Thanks you confirming your subscription!
                We hope your have fun using our platform. If ypu ever need support, please feel free to email us at support@loremgaming.com
            </p>
        </div>
    )
}
