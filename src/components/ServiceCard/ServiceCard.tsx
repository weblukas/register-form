import React, {ReactNode, FC} from 'react';
import style from './Card.module.scss';


interface IServiceCard {
    image: string;
    title: string;
    children: ReactNode
}

const ServiceCard: FC<IServiceCard> = ({ image, title, children }) => {
    return (
        <div className={style.card}>
            {children}
            <img src={image} alt="" className={style.card_image} />
            <span>{title}</span>
        </div>
    );
};

export default ServiceCard;
