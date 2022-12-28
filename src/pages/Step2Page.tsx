import React, { useState, useRef } from 'react';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input/Input';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import RadioButton from '../components/RadioButton/RadioButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import style from './Step2Page.module.scss';
import Paragraph from '../components/Paragraph/Paragraph';
import { radioTheme } from '../mui_themes';

import { useForm, SubmitHandler } from 'react-hook-form';

const Step2Page = () => {
    const navigate = useNavigate();
    const defaultValue = 'male';
    const [value, setValue] = React.useState(defaultValue);
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    // form Hook ////

    const [person, setPerson] = useState({
        PersonName: '',
        PersonAddress: '',
        PersonPhone: ''
    });
    interface IFormInput {
        firstName: string;
        emailAddress: string;
        phone: string;
    }

    const { control, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            firstName: '',
            emailAddress: '',
            phone: ''
        }
    });

    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        const { firstName, emailAddress, phone } = data;
        setPerson({
            PersonName: firstName,
            PersonAddress: emailAddress,
            PersonPhone: phone
        });

        console.log(person);
    };

    const handleClick = () => {
        () => onSubmit;
        // navigate('/step-3');
    };

    return (
        <section className={style.section}>
            <span>Step 2</span>
            <ProgressBar progress={2} />
            <Heading
                color="light"
                fontSize="small"
                fontWeight="weight700"
                className={style.section__heading}
            >
                What kind of services you are quiz?
            </Heading>
            <Paragraph
                fontSize="medium"
                fontWeight="fontWeight400"
                color="colorGrey300"
                className={style.section__paragraph}
            >
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concluda- turque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel.
            </Paragraph>

            {/* form starts here */}
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="First and last name"
                    sx={{ mb: '14.5px' }}
                    name="firstName"
                    control={control}
                />

                <Input
                    label="Phone"
                    sx={{ mb: '14.5px' }}
                    control={control}
                    name="phone"
                />
                <Input
                    label="email"
                    sx={{ mb: '14.5px' }}
                    control={control}
                    name="emailAddress"
                />
                <ThemeProvider theme={radioTheme}>
                    <FormControl>
                        <FormLabel id="radio-buttons-gender-label">
                            Gender
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={defaultValue}
                            name="radio-buttons-group"
                        >
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
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: '18.6px',
                                        fontWeight: '600'
                                    }
                                }}
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
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: '18.6px',
                                        fontWeight: '600',
                                        fontFamily: 'Jost'
                                    }
                                }}
                            />
                        </RadioGroup>
                    </FormControl>
                </ThemeProvider>
                <Button
                    variant="primary"
                    size="large"
                    handleClick={handleClick}
                    className={style.form__button}
                >
                    Next
                </Button>
                {/* <button type="submit">press</button> */}
            </form>
        </section>
    );
};

export default Step2Page;
