import React, { useContext } from 'react'
import { FormContext } from '@/context/FormContext';

import style from "./Sidebar.module.css";

export const Sidebar = () => {

    const { numberForm } = useContext( FormContext )

    return (
        <div className={`position-relative d-md-block ${ style["sidebar-responsive"] }`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <picture>
                <source srcSet='/assets/bg-sidebar-mobile.svg' media='(max-width: 768px)'/>
                <img 
                    src="/assets/bg-sidebar-desktop.svg" 
                    alt="Image Background SideBar"
                    className={ style['sidebar-menu-img'] }
                />
            </picture>
            
            <div className={ style['sidebar-menu'] }>
                <div className='p-5 p-md-4 d-flex d-md-block justify-content-center align-items-center column-gap-3'>
                    <div className='d-flex align-items-center gap-3'>
                        <div className={`bg-light-blue ${ numberForm === 1 ? "radius-component" : "radius-component-transparent"} position-relative`}>
                            <p className='pos-center fw-medium'>1</p>
                        </div>
                        <div className='d-none d-md-block'>
                            <p className='text-uppercase col-pastel-blue fw-medium'>Step 1</p>
                            <p className='col-white fw-bold text-uppercase letter-s-1'>Your info</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-3 mt-none mt-md-4'>
                        <div className={`bg-light-blue ${ numberForm === 2 ? "radius-component" : "radius-component-transparent"} position-relative`}>
                            <p className='pos-center fw-medium'>2</p>
                        </div>
                        <div className='d-none d-md-block'>
                            <p className='text-uppercase col-pastel-blue fw-medium'>Step 2</p>
                            <p className='col-white fw-bold text-uppercase letter-s-1'>Select plan</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-3 mt-none mt-md-4'>
                        <div className={`bg-light-blue ${ numberForm === 3 ? "radius-component" : "radius-component-transparent"} position-relative`}>
                            <p className='pos-center fw-medium'>3</p>
                        </div>
                        <div className='d-none d-md-block'>
                            <p className='text-uppercase col-pastel-blue fw-medium'>Step 3</p>
                            <p className='col-white fw-bold text-uppercase letter-s-1'>Add-ons</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-3 mt-none mt-md-4'>
                        <div className={`bg-light-blue ${ numberForm === 4 ? "radius-component" : "radius-component-transparent"} position-relative`}>
                            <p className='pos-center fw-medium'>4</p>
                        </div>
                        <div className='d-none d-md-block'>
                            <p className='text-uppercase col-pastel-blue fw-medium'>Step 4</p>
                            <p className='col-white fw-bold text-uppercase letter-s-1'>Summary</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
