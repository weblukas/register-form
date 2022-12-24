import React from 'react';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input/Input';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButton from '../components/RadioButton/RadioButton';

const Step2Page = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('female');
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const theme = createTheme({
        components: {
            MuiFormControlLabel: {
                styleOverrides: {
                    root: {
                        color: '#5F5F63'
                    }
                }
            },
            MuiRadio: {
                styleOverrides: {
                    root: {
                        color: '#6684F2'
                    }
                }
            }
        }
    });

    return (
        <section>
            <Input label="First and last name" />
            <Input label="Phone" />
            <Input label="email" />
            <ThemeProvider theme={theme}>
                <FormControlLabel
                    control={
                        <RadioButton
                            handleChange={handleChange}
                            value="male"
                            checked={value === 'male'}
                            name="gender-radio"
                        />
                    }
                    label="Male"
                />
                <FormControlLabel
                    control={
                        <RadioButton
                            handleChange={handleChange}
                            value="female"
                            checked={value === 'female'}
                            name="gender-radio"
                        />
                    }
                    label="Female"
                />
            </ThemeProvider>
            <Button
                variant="primary"
                size="large"
                handleClick={() => navigate('/step-3')}
            >
                Next
            </Button>
        </section>
    );
};

export default Step2Page;
