import React, { FC } from 'react';
import style from './Paragraph.module.scss';
import cn from 'classnames';

interface IParagraph {
    children: React.ReactNode;
    fontWeight: string;
    fontSize: string;
    color: string;
    className?: string;
}

const Paragraph: FC<IParagraph> = ({
    children,
    fontSize,
    fontWeight,
    color,
    className
}) => {
    return (
        <p
            className={cn(
                style[fontWeight],
                style[fontSize],
                style[color],
                className
            )}
        >
            {children}
        </p>
    );
};

export default Paragraph;
