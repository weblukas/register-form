import React, { FC, ReactNode } from 'react';
import style from './Button.module.scss';
import cn from 'classnames';

interface IButton {
    size: string;
    variant: string;
    children: ReactNode;
    className?: string;
    type?: 'submit' | 'reset' ;
    handleClick: () => void;
}

const Button: FC<IButton> = ({ handleClick, children, size,  variant, className, type }) => {
    return (
        <button
            type={type}
            onClick={handleClick}
            className={cn(
                style.button, 
                style[size], 
                style[variant], 
                className)}
        >
            {children}
        </button>
    );
};

export default Button;
