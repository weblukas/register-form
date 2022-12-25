import React from 'react';
import style from './Heading.module.scss';
import cn from 'classnames';
interface IHeading {
    children: React.ReactNode;
    fontSize: string;
    fontWeight: string;
    color: string;
    className?: string;
}

const Heading: React.FC<IHeading> = ({
    children,
    fontSize,
    fontWeight,
    color,
    className
}) => {
    return (
        <h1
            className={cn(
                style[fontSize],
                style[fontWeight],
                style[color],
                className
            )}
        >
            {children}
        </h1>
    );
};

export default Heading;
