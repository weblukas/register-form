import { FC, ReactNode } from 'react';
import { FormControl, TextField, FormLabel,  } from '@mui/material';
import { Controller, FieldValues, Control } from 'react-hook-form';


interface IInput {
    label?: string;
    select?: boolean;
    multiline?: boolean;
    rows?: number;
    placeholder?: string;
    sx?: object;
    children?: ReactNode;
    name: string;
    control: any; //Control<FormInput>
    error?: boolean;
    helperText?: string;
    defaultValue?: string;
    id?: string;
    outsideLabel?: string;
    src?: string;
    alt?: string;
    className?: string;
    // color?: any;
     //////    how to add color property to change color of text field
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
    className,
    // color,

}) => {

    // const {
    //     formState: { errors },
    //   } = useFormContext();

      
    return (
        <FormControl fullWidth sx={sx}>
            <FormLabel>
                <img src={src} alt={alt} className={className} />
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
                        // color={color} 
                    >
                        {children}
                    </TextField>
                )}
            />
        </FormControl>
    );
};

export default Input;
