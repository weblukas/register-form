import React, {FC, ReactNode} from 'react';
import heroImg from '../../assets/hero.jpg';
import style from './SharedLayout.module.scss';
interface ISharedLayout {
  children: ReactNode;
}

const SharedLayout: FC<ISharedLayout> = ({children}) => {
    return (<>
    
        <div className={style.wrapper}>
            <img src={heroImg} alt="nature image" className={style.heroImg} />
            
       {children}
        </div>
    </>
    );
};

export default SharedLayout;
