import React from 'react';
import style from './Heading.module.scss';

interface IHeading {
    children: React.ReactNode;
    fontSize: string;
    fontWeight: string;
    color: string;
}

const Heading: React.FC<IHeading> = ({
    children,
    fontSize,
    fontWeight,
    color
}) => {
    return (
        <h1
            className={`
        ${style.heading} 
        ${style[fontSize]}
        ${style[fontWeight]}
        ${style[color]}`}
        >
            {children}
        </h1>
    );
};

export default Heading;
