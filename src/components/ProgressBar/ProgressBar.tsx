import React, { FC } from 'react';
import style from './ProgressBar.module.scss';

interface IProgressBar {
    progress: number;
}

const ProgressBar: FC<IProgressBar> = ({ progress }) => {
    function countProgress(progressNr: number) {
        return () => {
            let lowerNr = progressNr - 1
            setTimeout(() => lowerNr, 1000);
            return progressNr;
        };
    }

    const progressStyle = {
        width: `${progress * 20}%`,
        transition: 'width 1s ease-in-out'
    };
    return (
        <div>
            <span>{progress} of 5 Completed</span>
            <div className={style.progressBar}>
                <div
                    style={progressStyle}
                    className={style.innerProgress}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
