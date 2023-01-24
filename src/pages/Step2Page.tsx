import React, { useState } from 'react';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../components/CustomInput/CustomInput';
import { ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import RadioButton from '../components/RadioButton/RadioButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import style from './Step2Page.module.scss';
import Paragraph from '../components/Paragraph/Paragraph';
import { radioTheme, inputTheme } from '../mui_themes';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import UploadBox from '../components/UploadBox/UploadBox';
import navi_2 from '../assets/navi_2.png';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSelector, useDispatch } from 'react-redux';

import { DevTool } from '@hookform/devtools';
import { updateEmailAddress, updateName } from '../app/formSlice';
import { RootState } from '../app/store';
const Step2Page = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentState = useSelector(
        (state: RootState) => state.form.firstAndLastName
    );
    console.log(currentState, 'to twoje imię');
    const schema = yup.object().shape({
        firstName: yup.string().min(3).max(20).required(),
        emailAddress: yup.string().email().required(),
        phone: yup.number().min(6).max(18),
    });


    // form Hook ////

    const [person, setPerson] = useState({
        PersonName: '',
        PersonAddress: '',
        PersonPhone: '',
        PersonGender: ''
    });

    //const methods = useForm();  check if you need form Providre and methods

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInput>({
        defaultValues: {
            firstName: '',
            emailAddress: '',
            phone: '',
            gender: ''
        },
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
        console.log(data);
        const { firstName, emailAddress, phone, gender } = data;
        setPerson({
            PersonName: firstName,
            PersonAddress: emailAddress,
            PersonPhone: phone,
            PersonGender: gender
        });
        dispatch(
            updateName({
                firstAndLastName: firstName
            })
        );
        dispatch(
            updateEmailAddress({
                emailAddress: emailAddress
            })
        );
    };

    const handleClick = () => {
        () => onSubmit;
        // navigate('/step-3');
    };

    console.log(person);
    return (
        <section className={style.section}>
            <img
                src={navi_2}
                alt="step 1 image"
                className={style.section__image}
            />
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
                <ThemeProvider theme={inputTheme}>
                    <CustomInput
                        placeholder="First and last name"
                        sx={{ mb: '14.5px' }}
                        control={control}
                        name="firstName"
                        error={!!errors.firstName}
                        helperText={
                            errors.firstName && errors.firstName.message
                        }
                    />

                    <CustomInput
                        placeholder="Phone"
                        sx={{ mb: '14.5px' }}
                        control={control}
                        name="phone"
                        error={!!errors.phone}
                        helperText={errors.phone && errors.phone.message}
                    />
                    <CustomInput
                        placeholder="email"
                        sx={{ mb: '14.5px' }}
                        control={control}
                        name="emailAddress"
                        error={!!errors.emailAddress}
                        helperText={
                            errors.emailAddress && errors.emailAddress.message
                        }
                    />
                </ThemeProvider>

                <ThemeProvider theme={radioTheme}>
                    {/* <FormProvider {...methods}> */}
                    <FormControl sx={{ mt: '50px' }}>
                        <FormLabel id="radio-buttons-gender-label">
                            Gender
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="gender-radio"
                            defaultValue="male"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                label="Male"
                                control={
                                    <RadioButton
                                        name="gender"
                                        value="male"
                                        control={control}
                                    />
                                }
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
                                        name="gender"
                                        value="female"
                                        control={control}
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
                    {/* </FormProvider> */}
                </ThemeProvider>
                <UploadBox />
                <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    handleClick={handleClick}
                    className={style.form__button}
                >
                    Next
                </Button>
                {/* <button type="submit">press</button> */}
            </form>
            <DevTool control={control} />
        </section>
    );
};

export default Step2Page;
