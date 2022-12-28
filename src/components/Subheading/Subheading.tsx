import React, { FC, ReactNode } from 'react';
import style from './Subheading.module.scss';
import cn from 'classnames';

interface ISubheading {
    children: ReactNode;
    fontSize: string;
    fontWeight: string;
    color: string;
}

const Subheading: FC<ISubheading> = ({
    children,
    fontSize,
    fontWeight,
    color
}) => {
    return (
        <h2
            className={cn(
                style[color], 
                style[fontSize], 
                style[fontWeight])}
        >
            {children}
        </h2>
    );
};

export default Subheading;
