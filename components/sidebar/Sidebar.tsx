import React from 'react'

import style from "./Sidebar.module.css";

export const Sidebar = () => {
    return (
        <div className="position-relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src="/assets/bg-sidebar-desktop.svg" 
                alt="Image Background SideBar"
                className='w100'
            />
            <div className={ style['sidebar-menu'] }>
                <div className='p-4'>
                    <div className='d-flex align-items-center gap-3'>
                        <div className='bg-light-blue radius-component position-relative'>
                            <p className='pos-center fw-medium'>1</p>
                        </div>
                        <div>
                            <p className='text-uppercase col-pastel-blue fw-medium'>Step 1</p>
                            <p className='col-white fw-bold text-uppercase letter-s-1'>Your info</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-3 mt-4'>
                        <div className='radius-component-transparent position-relative'>
                            <p className='pos-center fw-medium col-white'>2</p>
                        </div>
                        <div>
                            <p className='text-uppercase col-pastel-blue fw-medium'>Step 2</p>
                            <p className='col-white fw-bold text-uppercase letter-s-1'>Select plan</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-3 mt-4'>
                        <div className='radius-component-transparent position-relative'>
                            <p className='pos-center fw-medium col-white'>3</p>
                        </div>
                        <div>
                            <p className='text-uppercase col-pastel-blue fw-medium'>Step 3</p>
                            <p className='col-white fw-bold text-uppercase letter-s-1'>Add-ons</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-3 mt-4'>
                        <div className='radius-component-transparent position-relative'>
                            <p className='pos-center fw-medium col-white'>4</p>
                        </div>
                        <div>
                            <p className='text-uppercase col-pastel-blue fw-medium'>Step 4</p>
                            <p className='col-white fw-bold text-uppercase letter-s-1'>Summary</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
