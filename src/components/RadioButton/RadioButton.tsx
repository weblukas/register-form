import React, { FC } from 'react';
import Radio from '@mui/material/Radio';
import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
interface IRadioButton {
    // handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
    checked: boolean;
    value: string;
    name: string;
    control: any;
 
}

const RadioButton: FC<IRadioButton> = ({
    // handleChange,
    checked,
    value,
    name,
    control,

}) => {
    return (
     
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Radio
                        {...field}
                        checked={checked}
                        // onChange={handleChange}
                        value={value}
                    />
                )}
            />
       
    );
};

export default RadioButton;
