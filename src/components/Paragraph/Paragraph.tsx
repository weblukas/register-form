import React, {FC} from 'react';
import style from './Paragraph.module.scss';
import cn from 'classnames';

interface IParagraph {
    children: React.ReactNode;
    fontWeight: string;
    fontSize: string;
    color: string;
}


const Paragraph: FC<IParagraph> = ({ children, fontSize, fontWeight, color }) => {
    return (
        <p className={cn(style[fontWeight], style[fontSize], style[color])}>{children}</p>
    );
};

export default Paragraph;
