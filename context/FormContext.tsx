import { createContext } from 'react';

export interface ContextProps {
    numberForm: number;
    changeNumberForm: (number: number) => void;
};

export const FormContext = createContext({} as ContextProps);
