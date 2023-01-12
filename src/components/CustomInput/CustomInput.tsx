import { FC, ReactNode } from 'react';
import { FormControl, TextField, FormLabel } from '@mui/material';
import { Controller, FieldValues, Control } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
interface IInput {
    label?: string;
    select?: boolean;
    multiline?: boolean;
    rows?: number;
    placeholder?: string;
    sx?: object;
    children?: ReactNode;
    name: string;
    control: any;
    error?: boolean;
    helperText?: string;
    defaultValue?: string;
    id?: string;
    outsideLabel?:string;
    src?: string;
    alt?: string;
}

const Input: FC<IInput> = ({ 
    label, 
    select,
    multiline,
    placeholder,
    rows, 
    sx, 
    name, 
    control, 
    children, 
    error, 
    helperText, 
    defaultValue,
    id,
    outsideLabel,
    src,
    alt, 
}) => {

    // const {
    //     formState: { errors },
    //   } = useFormContext();
      
    return (
        <FormControl fullWidth sx={sx}>
            <FormLabel>
                <img src={src} alt={alt}/>
                {outsideLabel}
                </FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        select={select}
                        multiline={multiline}
                        rows={rows}
                        label={label}
                        placeholder={placeholder}
                        error={error}
                        helperText={helperText}
                        defaultValue={defaultValue}
                        id={id}
                    >
                        {children}
                    </TextField>
                )}
            />
        </FormControl>
    );
};

export default Input;
