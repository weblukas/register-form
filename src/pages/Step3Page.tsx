import { FormControl, MenuItem } from '@mui/material';
import React from 'react';
import Input from '../components/Input/Input';

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
    return (
        <FormControl fullWidth>
            <Input select label="Languages">
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
