import React, { FC } from 'react';
import Radio from '@mui/material/Radio';
import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
interface IRadioButton {
    name: string;
    value: string;
    control: any;
    checked?: boolean;
 
}

const RadioButton: FC<IRadioButton> = ({
    name,
    value,
    control,
    checked,
}) => {
    return (
     
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Radio
                        {...field}
                        value={value}
                        checked={checked}
                    />
                )}
            />
       
    );
};

export default RadioButton;
