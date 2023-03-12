import React, { useState } from 'react';
import cn from 'classnames';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import CustomInput from '../components/CustomInput/CustomInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './Step3Page.module.scss';
import { languages } from '../utilitis/data';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import RadioButton from '../components/RadioButton/RadioButton';
import navi_3 from '../assets/navi_3.png';
import rightArrow from '../assets/rightArrow.png';
import leftArrow from '../assets/leftArrow.png';
import msgIcon from '../assets/msgIcon.png';
import { ThemeProvider } from '@mui/material/styles';
import { step3formTheme } from '../mui_themes';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import Button from '../components/Button/Button';

// progres bar nie animuje się
const Step3Page = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(languages[0].value);
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    const handleClick = () => {
        navigate('/step-4');
    };
    const { control, handleSubmit } = useForm();

    return (
        <section className={style.section}>
            <img
                src={navi_3}
                alt="step 3 image"
                className={style.section__image}
            />
            <span>Step 3</span>
            <ProgressBar progress={3} />
            <Heading
                color="light"
                fontSize="small"
                fontWeight="weight700"
                className={style.section__heading}
            >
                What kind of services you Need?
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
            <form className={style.form}>
                <ThemeProvider theme={step3formTheme}>
                    <FormControl fullWidth>
                        <RadioGroup
                            aria-labelledby="web design group"
                            defaultValue="webDesign1"
                            name="radio-buttons-group"
                            // value={value}
                            // onChange={handleChange}
                        >
                            <div className={style.radioBtnContainer}>
                                <FormControlLabel
                                    value="webDesign1"
                                    control={
                                        <RadioButton
                                            // handleChange={handleChange}
                                            control={control}
                                            value="webDesign1"
                                            name="web-design-radio"
                                        />
                                    }
                                    label="Web Design"
                                    className={style.label}
                                />
                            </div>
                            <div className={style.radioBtnContainer}>
                                <FormControlLabel
                                    value="webDesign2"
                                    control={
                                        <RadioButton
                                            // handleChange={handleChange}
                                            control={control}
                                            value="webDesign2"
                                            name="web-design-radio"
                                        />
                                    }
                                    label="Web Design"
                                    className={style.label}
                                />
                            </div>
                            <div className={style.radioBtnContainer}>
                                <FormControlLabel
                                    value="webDesign3"
                                    control={
                                        <RadioButton
                                            // handleChange={handleChange}
                                            control={control}
                                            value="webDesign3"
                                            name="web-design-radio"
                                        />
                                    }
                                    label="Web Design"
                                    className={style.label}
                                />
                            </div>
                            <div className={style.radioBtnContainer}>
                                <FormControlLabel
                                    value="webDesign4"
                                    control={
                                        <RadioButton
                                            // handleChange={handleChange}
                                            control={control}
                                            value="webDesign4"
                                            name="web-design-radio"
                                        />
                                    }
                                    label="Web Design"
                                    className={style.label}
                                />
                            </div>
                        </RadioGroup>
                        <CustomInput
                            control={control}
                            name="languages"
                            select
                            label="Languages"
                            outsideLabel="I want to browse projects in the following
                            languages:"
                            aria-describedby="select a language to browse projects"
                            defaultValue={languages[0].value}
                            sx={{
                                '& .MuiInputLabel-outlined': {
                                    margin: 0,
                                    fontSize: 16,
                                    fontWeight: 400,
                                    height: 80
                                },
                                '& .MuiFormLabel-root': {
                                    fontFamily: 'Jost',
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: '26px'
                                }
                            }}
                        >
                            {languages.map((language) => (
                                <MenuItem
                                    key={language.value}
                                    value={language.value}
                                >
                                    {language.label}
                                </MenuItem>
                            ))}
                        </CustomInput>
                        <CustomInput
                            control={control}
                            name="notes"
                            outsideLabel="Write Some note"
                            src={msgIcon}
                            alt=""
                            className={cn(style.label__icon)}
                            multiline
                            aria-describedby="write some note"
                            rows={5}
                            placeholder="Hi ciestosolution, I noticed your profile and would like to offer you my project.
We can discuss any details over chat."
                        />
                    </FormControl>
                    <HorizontalDivider className={style.form__divider} />
                    <div className={style.button__wrapper}>
                        <Button
                            variant="secondary"
                            size="large"
                            handleClick={handleClick}
                            className={cn(
                                style.form__button,
                                style['form__button--backward']
                            )}
                        >
                            <img src={leftArrow} alt="sdf" />
                            Backward
                        </Button>
                        <Button
                            variant="primary"
                            size="large"
                            handleClick={handleClick}
                            className={style.form__button}
                        >
                            Forward
                            <img src={rightArrow} alt="" />
                        </Button>
                    </div>
                </ThemeProvider>
            </form>
        </section>
    );
};

export default Step3Page;
