import Image from 'next/image'
import React from 'react'

export const ImageContainer = () => {
    return (
        <div className='position-relative'>
            <Image 
                src="/assets/bg-sidebar-desktop.svg"
                width={ 200 }
                height={ 500 }
                alt="Sidebar Background"
                className='object-fit-cover'
            />
        </div>
    )
}
