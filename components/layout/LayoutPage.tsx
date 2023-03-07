import React, { FC, ReactNode } from 'react'

import style from "./LayoutPage.module.css";

interface Props {
    children: ReactNode;
}

export const LayoutPage: FC<Props> = ({ children }) => {
    return (
        <div className={ style.layout }>
            { children }
        </div>
    )
}
