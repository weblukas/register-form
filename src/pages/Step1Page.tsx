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

const Step1Page = () => {

    const navigate = useNavigate();
    return (
        <section>
            <Heading color="light" fontSize="large" fontWeight="weight700">
                What kind of Services you need?
            </Heading>
            <Paragraph fontSize='large' fontWeight='fontWeight400' color='colorGrey300'>
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque
usu, facete detracto patrioque an per, lucilius pertinacia eu vel.
            </Paragraph>
            <ServiceCard
                image={diagram}
                title="Corporate Services"
            >a</ServiceCard>
            <ServiceCard
                image={freelancing}
                title="Corporate Services"
            >a</ServiceCard>
            <ServiceCard
                image={development}
                title="Development"
            >b</ServiceCard>

            <Button variant='primary' size='large' handleClick={() => navigate('/step-2')}>
                Next
            </Button>
        </section>
    );
};

export default Step1Page;
