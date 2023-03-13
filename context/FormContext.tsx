import { IForm, IFormOptional } from '@/interfaces/form';
import { createContext } from 'react';

export interface ContextProps {
    numberForm: number;
    form: IForm;
    getInfo: boolean;
    handleFillForm: ( formUser: IFormOptional ) => void;
    changeNumberForm: (number: number) => void;
    handleConfirm: () => boolean;
};

export const FormContext = createContext({} as ContextProps);
