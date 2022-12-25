import React, { FC } from 'react';
import style from './Button.module.scss';
import cn from 'classnames';

interface IButton {
    size: string;
    variant: string;
    children: React.ReactNode;
    className?: string;
    handleClick: () => void;
}

const Button: FC<IButton> = ({ handleClick, children, size, variant, className }) => {
    return (
        <button
            type="submit"
            className={cn(
                style.button, 
                style[size], 
                style[variant], 
                className)}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
