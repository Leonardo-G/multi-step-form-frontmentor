import { useState } from 'react';

import { Sidebar } from '@/components/sidebar/Sidebar';
import { LayoutPage } from '../components/layout/LayoutPage';
import { FormContainer } from '@/components/form/formContainer/FormContainer';

export default function Home() {



    return (
        <LayoutPage>
            <div className='d-md-flex'>
                <Sidebar />
                <FormContainer/>
            </div>
        </LayoutPage>
    )
}
