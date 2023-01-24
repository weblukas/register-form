import React, { FC } from 'react';
import Radio from '@mui/material/Radio';
import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
interface IRadioButton {
    name: string;
    value: string;
    control: any;
 
}

const RadioButton: FC<IRadioButton> = ({
    name,
    value,
    control,
}) => {
    return (
     
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Radio
                        {...field}
                        value={value}
                    />
                )}
            />
       
    );
};

export default RadioButton;
