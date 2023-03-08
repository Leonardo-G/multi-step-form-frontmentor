import { FormContainer } from '@/components/form/FormContainer';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { LayoutPage } from '../components/layout/LayoutPage';
export default function Home() {
    return (
        <LayoutPage>
            <div className='d-flex'>
                <Sidebar />
                <FormContainer />
            </div>
        </LayoutPage>
    )
}
