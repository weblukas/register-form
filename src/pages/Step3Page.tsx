import { FormControl, MenuItem } from '@mui/material';
import React from 'react';
import Input from '../components/Input/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
const Step3Page = () => {
    const languages = [
        {
            value: 'English',
            label: 'English'
        },
        {
            value: 'Polish',
            label: 'Polish'
        },
        {
            value: 'Spanish',
            label: 'Spanish'
        },
        {
            value: 'Hindi',
            label: 'Hindi'
        }
    ];

  const { control, handleSubmit } = useForm();

    return (
        <FormControl fullWidth>
            <Input select label="Languages" name="languages" control={control}>
                {languages.map((language) => (
                    <MenuItem key={language.value} value={language.value}>
                        {language.label}
                    </MenuItem>
                ))}
            </Input>
        </FormControl>
    );
};

export default Step3Page;
