import React from 'react'

export const Sidebar = () => {
    return (
        <div className="position-relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src="/assets/bg-sidebar-desktop.svg" 
                alt="Image Background SideBar" 
            />
            <div>
                <div className='d-flex'>
                    <p className='bg-primary-subtle rounded-circle py-2 px-3'>1</p>
                </div>
            </div>
        </div>
    )
}
