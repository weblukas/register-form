import React, {ReactNode} from 'react';
import style from './PlanCard.module.scss';

interface IPlanCard {
    img: string;
    children: ReactNode;
}

const PlanCard = ({ img, children }: IPlanCard) => {
    return (
        <div className={style.planCard}>
            <img src={img} alt="" />
            {children}
        </div>
    );
};

export default PlanCard;
