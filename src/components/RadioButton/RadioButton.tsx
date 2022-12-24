import React, { FC } from 'react';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

interface IRadioButton {
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
    checked: boolean;
    value: string;
    name: string;
}

const RadioButton: FC<IRadioButton> = ({
    handleChange,
    checked,
    value,
    name
}) => {
    return (
        <Radio
            checked={checked}
            onChange={handleChange}
            value={value}
            name={name}
        />
    );
};

export default RadioButton;
