import React from 'react';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import style from './Step4Page.module.scss';
import navi_4 from '../assets/navi_4.png';
import budgetIcon from '../assets/budgetIcon.png';
import { budget } from '../utilitis/data';
import CustomInput from '../components/CustomInput/CustomInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import { FormControlLabel, Input, FormHelperText } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { step4Themeform } from '../mui_themes';
import FormLabel from '@mui/material/FormLabel';
const Step4Page = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInput>({
        defaultValues: {
            firstName: '',
            emailAddress: '',
            phone: ''
        }
    });

    return (
        <section className={style.section}>
            <img
                src={navi_4}
                alt="step 1 image"
                className={style.section__image}
            />
            <span>Step 4</span>
            <ProgressBar progress={4} />
            <Heading
                color="light"
                fontSize="small"
                fontWeight="weight700"
                className={style.section__heading}
            >
                Select your budget
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
            {/* <Subheading fontSize='large' fontWeight='weight700' color='grey300' className={style.section__subheading} >
            <img src={budgetIcon} alt='' />
            Budget
          </Subheading> */}
            <form className={style.section__form}>
                <ThemeProvider theme={step4Themeform}>
                    {/* <InputLabel
                            htmlFor="budget-select"
                            variant="standard"
                            // margin='dense'
                        >
                        Budget
                    </InputLabel> */}

                    <CustomInput
                        select
                        id="budget-select"
                        aria-describedby="component-helper-text"
                        control={control}
                        name="budget-select"
                        defaultValue={budget[0].value}
                        outsideLabel="Budget"
                        sx={{ mt: '3rem' }}
                        src={budgetIcon}
                        alt=""
                    >
                        {budget.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </CustomInput>

                    {/* <label htmlFor="budget-select">
                            <img src={budgetIcon} alt="" />
                            Budget
                        </label> */}

                </ThemeProvider>
            </form>
        </section>
    );
};

export default Step4Page;
