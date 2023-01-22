import React, {FC} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import style from './CustomCheckbox.module.scss';
import { Controller } from 'react-hook-form';

interface ICustomCheckbox {
    onChange: ()=> void;
    checked: boolean;
    name: string;
    inputProps: object;
    label: string;
    control: any;
}

const CustomCheckbox: FC<ICustomCheckbox> = ({ control, onChange, checked, name, inputProps, label }) => {
    return (
        <FormControl>
                  <Controller
                name={name}
                control={control}
                render={({ field }) => (
                <FormControlLabel
                    className={`${style.checkboxContainer} ${
                        checked && style.checked
                    }`}
                    control={
                        <Checkbox
                            {...field}
                            checked={checked}
                            onChange={onChange}
                            name={name}
                            inputProps={inputProps}
                        />
                    }
                    label={label}
                />
                 )}
                 />
        </FormControl>
    );
};

export default CustomCheckbox;
