import { FC, ReactNode } from 'react';
import style from './Subheading.module.scss';
import cn from 'classnames';

interface ISubheading {
    children: ReactNode;
    fontSize: string;
    fontWeight: string;
    color: string;
    className?: string;
}

const Subheading: FC<ISubheading> = ({
    children,
    fontSize,
    fontWeight,
    color,
    className
}) => {
    return (
        <h2
            className={cn(
                style[color],
                style[fontSize],
                style[fontWeight],
                className
            )}
        >
            {children}
        </h2>
    );
};

export default Subheading;
