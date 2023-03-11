import { IForm, IFormOptional } from '@/interfaces/form';
import { createContext } from 'react';

export interface ContextProps {
    numberForm: number;
    form: IForm;
    handleFillForm: ( formUser: IFormOptional ) => void;
    changeNumberForm: (number: number) => void;
};

export const FormContext = createContext({} as ContextProps);
