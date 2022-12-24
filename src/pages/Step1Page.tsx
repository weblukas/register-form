import React from 'react';
import Heading from '../components/Heading/Heading';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import styles from './Step1Page.module.scss';
import diagram from '../assets/diagram.png';
import development from '../assets/development.png';
import freelancing from '../assets/freelancing.png';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButton from '../components/RadioButton/RadioButton';

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

    const [value, setValue] = React.useState('');
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return (
        <section>
            <Heading color="light" fontSize="large" fontWeight="weight700">
                What kind of Services you need?
            </Heading>
            <Paragraph
                fontSize="large"
                fontWeight="fontWeight400"
                color="colorGrey300"
            >
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concludaturque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel.
            </Paragraph>
            <ThemeProvider theme={theme}>


            <ServiceCard image={diagram} title="Corporate Services">
                <RadioButton
                    handleChange={handleChange}
                    value="corporate-services"
                    checked={value === 'corporate-services'}
                    name="service-radio"
                />
            </ServiceCard>
            <ServiceCard image={freelancing} title="Corporate Services">
                <RadioButton
                    handleChange={handleChange}
                    value="freelancing-services"
                    checked={value === 'freelancing-services'}
                    name="service-radio"
                />
            </ServiceCard>
            <ServiceCard image={development} title="Development">
                <RadioButton
                    handleChange={handleChange}
                    value="development"
                    checked={value === 'development'}
                    name="service-radio"
                />
            </ServiceCard>
            </ThemeProvider>
            <Button
                variant="primary"
                size="large"
                handleClick={() => navigate('/step-2')}
            >
                Next
            </Button>
        </section>
    );
};

export default Step1Page;
