import React from 'react';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import style from './Step4Page.module.scss';
import navi_4 from '../assets/navi_4.png';
import budgetIcon from '../assets/budgetIcon.png';
import msg2Icon from '../assets/msg2Icon.png';
import msgIcon from '../assets/msgIcon.png';
import { budget } from '../utilitis/data';
import { support } from '../utilitis/data';
import CustomInput from '../components/CustomInput/CustomInput';
import { useFormControl } from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import { ThemeProvider } from '@emotion/react';
import { step4Themeform } from '../mui_themes';
import { checkboxTheme } from '../mui_themes';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import cn from 'classnames';
import Subheading from '../components/Subheading/Subheading';
import CustomCheckbox from '../components/CustomCheckbox/CustomCheckbox';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import Button from '../components/Button/Button';
import { FormGroup } from '@mui/material';

const Step4Page = () => {
    const theme = useTheme();
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<CustomerInfo>({
        defaultValues: {
            firstName: '',
            emailAddress: '',
            phone: ''
        }
    });

    const navigate = useNavigate();
    const { focused } = useFormControl() || {};

    return (
        <section className={style.section}>
            <img
                src={navi_4}
                alt="step 4 image"
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
            <form className={style.form}>
                <ThemeProvider theme={step4Themeform}>
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
                        className={style.label__icon}
                        // color='red'
                    >
                        {budget.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </CustomInput>
                    <CustomInput
                        control={control}
                        name="support-select"
                        select
                        id="support-select"
                        aria-describedby="required support"
                        defaultValue={support[0].value}
                        outsideLabel="Required Support"
                        sx={{ mt: '3rem' }}
                        src={msg2Icon}
                        alt=""
                        className={cn(style.label__icon)}
                    >
                        {support.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </CustomInput>
                    <Subheading
                        fontSize="large"
                        fontWeight="weight700"
                        color="grey300"
                        className={style['form__subheading--checkbox']}
                    >
                        Optimization and Accessibility
                    </Subheading>
                    <ThemeProvider theme={checkboxTheme}>
                        <FormGroup row={true} className={style.checkboxGroup}>
                            <CustomCheckbox
                                onChange={() => console.log('pap')}
                                name="semantic-coding"
                                checked={true}
                                inputProps={{ 'aria-label': 'controlled' }}
                                label="Semantic coding"
                                control={control}
                            />
                            <CustomCheckbox
                                onChange={() => console.log('pap')}
                                name="mobile-app"
                                checked={true}
                                inputProps={{ 'aria-label': 'controlled' }}
                                label="Mobile APP"
                                control={control}
                            />
                            <CustomCheckbox
                                onChange={() => console.log('pap')}
                                name="mobile-design"
                                checked={true}
                                inputProps={{ 'aria-label': 'controlled' }}
                                label="Mobile Design"
                                control={control}
                            />
                        </FormGroup>
                    </ThemeProvider>
                    <CustomInput
                        control={control}
                        name="notes"
                        outsideLabel="Write Some note"
                        multiline
                        aria-describedby="write some note"
                        rows={5}
                        placeholder="Hi ciestosolution, I noticed your profile and would like to offer you my project.
                                    We can discuss any details over chat."
                        sx={{ mt: '3rem' }}
                        src={msgIcon}
                        alt=""
                        className={cn(style.label__icon)}
                    />
                    <HorizontalDivider className={style.form__divider} />
                    <Button
                        size="small"
                        variant="primary"
                        handleClick={() => navigate('/step-5')}
                        className={style.form__button}
                    >
                        Next
                    </Button>
                </ThemeProvider>
            </form>
        </section>
    );
};

export default Step4Page;
