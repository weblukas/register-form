import React, { FC, ReactNode } from 'react';
import { FormControl, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
interface IInput {
    label: string;
    select?: boolean;
    sx?: object;
    children?: ReactNode;
    name: string;
    control: any;
    error?: boolean;
    helperText?: string;  
}

const Input: FC<IInput> = ({ label, select, sx, name, control, children, error, helperText }) => {

    // const {
    //     formState: { errors },
    //   } = useFormContext();
      
    return (
        <FormControl fullWidth sx={sx}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextField 
                    {...field} 
                    select={select} 
                    label={label}
                    error={error}
                    helperText={helperText}
                    >
                        {children}
                    </TextField>
                )}
            />
        </FormControl>
    );
};

export default Input;
