import React, { Children, FC, ReactNode } from 'react';
import { FormControl, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface IInput {
    label: string;
    select?: boolean;
    sx?: object;
    children?: ReactNode;
    name: string;
    control: any;
}

const Input: FC<IInput> = ({ label, select, sx, name, control, children }) => {
    return (
        <FormControl fullWidth sx={sx}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextField {...field} select={select} label={label}>
                        {children}
                    </TextField>
                )}
            />
        </FormControl>
    );
};

export default Input;
