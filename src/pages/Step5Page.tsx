import React, { useState } from 'react';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import style from './Step5Page.module.scss';
import navi_5 from '../assets/navi_5.png';
import plan1 from '../assets/plan1.png';
import plan2 from '../assets/plan2.png';
import DatePicker from '../components/DatePicker/DatePicker';
import PlanCard from '../components/PlanCard/PlanCard';
import Subheading from '../components/Subheading/Subheading';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import Button from '../components/Button/Button';
import CustomInput from '../components/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';
import { RadioGroup } from '@mui/material';
import RadioButton from '../components/RadioButton/RadioButton';


const Step5Page = () => {
    const [selectedValue, setSelectedValue] = useState('unlimited-plan');
    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value);
    };

    const radioPlanStyle = {
        position: 'absolute',
        top: '16px',
        left: '29px',
        color: '#6B59D3',
        width: '37px',
        height: '37px'
    };

    const submitForm = ()=>{}

    // react hook form
       const {
           control,
           handleSubmit,
           formState: { errors }
       } = useForm();

    return (
        <section className={style.section}>
            <img
                src={navi_5}
                alt="step 5 image"
                className={style.section__image}
            />
            <span>Step 5</span>
            <ProgressBar progress={5} />
            <Heading
                color="light"
                fontSize="small"
                fontWeight="weight700"
                className={style.section__heading}
            >
                Complete Final Step
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
            <form className={style.section__form}>
                <DatePicker />
                <RadioGroup
                    row
                    aria-labelledby="plan-radio"
                    defaultValue="unlimited-plan"
                    className={style.form__plans}
                >
                    <PlanCard img={plan1}>
                        <RadioButton
                            name="plan"
                            value="unlimited-plan"
                            control={control}
                            sx={radioPlanStyle}
                        />
                        <Subheading
                            fontSize="xlarge"
                            fontWeight="weight800"
                            color="grey700"
                        >
                            Unlimited plan
                        </Subheading>
                        {/* paragraph do poprawy fontWeight i color default values
                    powinny być ustawione */}
                        <Paragraph
                            fontSize="small"
                            fontWeight="fontWeight400"
                            color="colorGrey300"
                        >
                            Tation argumentum et usu, dicit viderer evertitur te
                            has. Eu dictas concludaturque usu,
                        </Paragraph>
                    </PlanCard>
                    <PlanCard img={plan2}>
                        <RadioButton
                            name="plan"
                            value="limited-plan"
                            control={control}
                            sx={radioPlanStyle}
                        />
                        <Subheading
                            fontSize="xlarge"
                            fontWeight="weight800"
                            color="grey700"
                        >
                            Limited plan
                        </Subheading>
                        {/* paragraph do poprawy fontWeight i color default values
                    powinny być ustawione */}
                        <Paragraph
                            fontSize="small"
                            fontWeight="fontWeight400"
                            color="colorGrey300"
                        >
                            Tation argumentum et usu, dicit viderer evertitur te
                            has. Eu dictas concludaturque usu,
                        </Paragraph>
                    </PlanCard>
                </RadioGroup>
                <CustomInput
                    control={control}
                    name="notes"
                    multiline
                    aria-describedby="write some note"
                    rows={5}
                    placeholder="write some note"
                    sx={{ mt: '3rem' }}
                />
                <HorizontalDivider className={style.form__divider} />
                <Button
                    size="small"
                    variant="primary"
                    handleClick={submitForm}
                    className={style.form__button}
                >
                    Next
                </Button>
            </form>
        </section>
    );
};

export default Step5Page;
