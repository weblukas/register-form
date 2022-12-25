import React, { FC } from 'react';
import style from './HorizontalDivider.module.scss';
import cn from 'classnames';

interface IHorizontalDivider {
    className?: string;
}

const HorizontalDivider: FC<IHorizontalDivider> = ({ className }) => {
    return <div className={cn(style.divider, className)}></div>;
};

export default HorizontalDivider;
