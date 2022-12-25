import React, { ReactNode, FC } from 'react';
import style from './Card.module.scss';
import cn from 'classnames';

interface IServiceCard {
    image: string;
    title: string;
    className?: string;
    children: ReactNode;
}

const ServiceCard: FC<IServiceCard> = ({ image, title, children, className }) => {
    return (
        <div className={cn(style.card, className)}>
            {children}
            <img src={image} alt="" className={style.card_image} />
            <span>{title}</span>
        </div>
    );
};

export default ServiceCard;
