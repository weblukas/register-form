import { useState, ChangeEvent } from 'react';
import style from './Step2Page.module.scss';
import { useNavigate } from 'react-router-dom';
import navi_2 from '../assets/navi_2.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../components/Button/Button';
import RadioButton from '../components/RadioButton/RadioButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import CustomInput from '../components/CustomInput/CustomInput';
import Paragraph from '../components/Paragraph/Paragraph';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';

import { ThemeProvider } from '@mui/material/styles';
import { radioTheme, inputTheme } from '../mui_themes';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FileUpload from '../components/FileUpload/FileUpload';

import { useSelector, useDispatch } from 'react-redux';
import { updateEmailAddress, updateName } from '../app/form2Slice';
import { RootState } from '../app/store';

const Step2Page = () => {
    const navigate = useNavigate();

    // toolkit
    const dispatch = useDispatch();

    // consol log global state
    const currentState = useSelector(
        (state: RootState) => state.personInfo.firstAndLastName
    );
    console.log(currentState, 'to twoje imię');
    
    
    
    const schema = yup.object().shape({
        firstName: yup.string().min(3).max(20).required(),
        emailAddress: yup.string().email().required()
        // phone: yup.number().min(5).max(10),
    });

    // uploadfile
    const [uploadedFile, setUploadedFile] = useState<File>();
    const [acceptedFiles, setAcceptedFiles] = useState([
        {
            selectedFile: {},
            fileName: '',
            fileSize: 0
        }
    ]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        // const files = e.target.files?[0]; try to refactor

        if (files !== null && files !== undefined) {
            const fileList = files;
            const selectedFile = fileList[0];
            const fileName = fileList[0].name;
            const fileSize = fileList[0].size;
            setUploadedFile(selectedFile);
            setAcceptedFiles([
                ...acceptedFiles,
                {
                    selectedFile,
                    fileName,
                    fileSize
                }
            ]);
        }
    };

    // form Hook ////

    const [person, setPerson] = useState({
        PersonName: '',
        PersonAddress: '',
        PersonPhone: '',
        PersonGender: '',
        fileUpload: []
    });

    //const methods = useForm();  check if you need form Providre and methods

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<CustomerInfo>({
        defaultValues: {
            firstName: '',
            emailAddress: '',
            phone: '',
            gender: '',
            fileUpload: []
        },
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<CustomerInfo> = (data: CustomerInfo) => {
        console.log(data);
        const { firstName, emailAddress, phone, gender } = data;
        setPerson({
            PersonName: firstName,
            PersonAddress: emailAddress,
            PersonPhone: phone,
            PersonGender: gender,
            PersonFiles: fileUpload
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
        console.log(errors);
        if (!errors) {
            console.log(errors, 'błędy aaaaaaaaaaaaa');
            navigate('/step-3');
        }
        () => onSubmit;
    };

    console.log(person);
    return (
        <section className={style.section}>
            <img
                src={navi_2}
                alt="step 2 image"
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
                        control={control}
                        name="firstName"
                        error={!!errors.firstName}
                        helperText={
                            errors.firstName && errors.firstName.message
                        }
                    />

                    <CustomInput
                        placeholder="Phone"
                        control={control}
                        name="phone"
                        error={!!errors.phone}
                        helperText={errors.phone && errors.phone.message}
                    />
                    <CustomInput
                        placeholder="email"
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
                            // name="radio-buttons-group"
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
                <FileUpload
                    name="fileUpload"
                    control={control}
                    handleChange={handleChange}
                    acceptedFiles={acceptedFiles}
                />
                <HorizontalDivider className={style.form__divider} />
                <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    handleClick={handleClick}
                    className={style.form__button}
                >
                    Next
                </Button>
            </form>
            <DevTool control={control} />
        </section>
    );
};

export default Step2Page;
