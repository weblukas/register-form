import React, { Children, FC, ReactNode } from 'react';
import { FormControl, TextField } from '@mui/material';

interface IInput {
    label: string;
    select?: boolean;
    children?: ReactNode;
}

const Input: FC<IInput> = ({ label, select, children }) => {
    return (
        <FormControl fullWidth>
            <TextField select={select} label={label}>
                {children}
            </TextField>
        </FormControl>
    );
};

export default Input;
