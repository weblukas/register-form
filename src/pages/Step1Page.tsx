import React, {useState} from 'react';
import Heading from '../components/Heading/Heading';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import style from './Step1Page.module.scss';
import navi_1 from '../assets/navi_1.png';
import diagram from '../assets/diagram.png';
import development from '../assets/development.png';
import freelancing from '../assets/freelancing.png';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RadioButton from '../components/RadioButton/RadioButton';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import Subheading from '../components/Subheading/Subheading';

import { useForm, SubmitHandler } from 'react-hook-form';

const Step1Page = () => {
    const navigate = useNavigate();

    const theme = createTheme({
        components: {
            MuiRadio: {
                styleOverrides: {
                    root: {
                        position: 'absolute',
                        top: '13px',
                        right: '17px',
                        color: '#E1E1E1'
                    }
                }
            }
        }
    });


    // hook fom

    const { control, handleSubmit } = useForm({});


// spróbuj zamienić service card title na label i pozycjonować 

    const [value, setValue] = useState('');
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return (
        <section className={style.section}>
            <img src={navi_1} alt='step 1 image' className={style.section__image} />
            <Subheading fontSize="small" fontWeight="weight400" color="grey400">
                Step 1
            </Subheading>
            <Heading
                color="light"
                fontSize="large"
                fontWeight="weight700"
                className={style.section__heading}
            >
                What kind of Services you need?
            </Heading>
            <Paragraph
                fontSize="large"
                fontWeight="fontWeight400"
                color="colorGrey300"
                className={style.section__paragraph}
            >
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concludaturque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel.
            </Paragraph>
            <ThemeProvider theme={theme}>
                <ServiceCard
                    image={diagram}
                    title="Corporate Services"
                    className={style['section__card--first']}
                >
                    <RadioButton
                        handleChange={handleChange}
                        value="corporate-services"
                        checked={value === 'corporate-services'}
                        name="service-radio"
                        control={control}
                    />
                </ServiceCard>
                <ServiceCard
                    image={freelancing}
                    title="Freelancing Services"
                    className={style['section__card--center']}
                >
                    <RadioButton
                        handleChange={handleChange}
                        value="freelancing-services"
                        checked={value === 'freelancing-services'}
                        name="service-radio"
                        control={control}
                    />
                </ServiceCard>
                <ServiceCard
                    image={development}
                    title="Development"
                    className={style['section__card--last']}
                >
                    <RadioButton
                        handleChange={handleChange}
                        value="development"
                        checked={value === 'development'}
                        name="service-radio"
                        control={control}
                    />
                </ServiceCard>
            </ThemeProvider>
            <HorizontalDivider className={style.section__divider} />
            <Button
                variant="primary"
                size="large"
                className={style.section__button}
                handleClick={() => navigate('/step-2')}
              
            >
                Next
            </Button>
        </section>
    );
};

export default Step1Page;
