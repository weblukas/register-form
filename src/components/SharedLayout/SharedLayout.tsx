import React, {FC, ReactNode} from 'react';
import heroImg from '../../assets/hero.jpg';
import styles from './SharedLayout.module.scss';
import { Outlet } from 'react-router-dom';

interface ISharedLayout {
  children: ReactNode;
}

const SharedLayout: FC<ISharedLayout> = ({children}) => {
    return (<>
    
        <div className={styles.wrapper}>
            <img src={heroImg} alt="nature image" className={styles.heroImg} />
            
       {children}
        </div>
    </>
    );
};

export default SharedLayout;
