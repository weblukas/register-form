import { useSelector, useDispatch } from 'react-redux';
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
import { step1RadioTheme } from '../mui_themes';

import RadioGroup from '@mui/material/RadioGroup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { RootState } from '../app/store';
import { chooseService } from '../app/form1Slice';

const Step1Page = () => {
    const navigate = useNavigate();

    /////////toolkit////////
    
        const dispatch = useDispatch();
        const currentService = useSelector(
            (state: RootState) => state.serviceData
        );
        // console.log(currentService)
    // hook fom

    const { control, handleSubmit } = useForm<Service>({
        defaultValues: { service: '' }
    });

    const onSubmit: SubmitHandler<Service> = (data: Service) => {
        console.log(data);
    };

    const handleNext = () => {
        () => onSubmit;
        dispatch(chooseService)
        navigate("/step-2")
    };

 
    // spróbuj zamienić service card title na label i pozycjonować

    // const [value, setValue] = useState('');
    // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    //     setValue(e.currentTarget.value);
    // };
    return (
        <section className={style.section}>
            <img
                src={navi_1}
                alt="step 1 image"
                className={style.section__image}
            />
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
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <ThemeProvider theme={step1RadioTheme}>
                    <RadioGroup
                        row
                        aria-labelledby="service-radio"
                        defaultValue="corporate-services"
                    >
                        <ServiceCard
                            image={diagram}
                            title="Corporate Services"
                            className={style['form__card--first']}
                        >
                            <RadioButton
                                name="service"
                                value="corporate-services"
                                control={control}
                            />
                        </ServiceCard>
                        <ServiceCard
                            image={freelancing}
                            title="Freelancing Services"
                            className={style['form__card--center']}
                        >
                            <RadioButton
                                name="service"
                                value="freelancing-services"
                                control={control}
                            />
                        </ServiceCard>
                        <ServiceCard
                            image={development}
                            title="Development"
                            className={style['form__card--last']}
                        >
                            <RadioButton
                                name="service"
                                value="development"
                                control={control}
                                // handleChange={handleChange}
                                // checked={value === 'development'}
                            />
                        </ServiceCard>
                    </RadioGroup>
                </ThemeProvider>
                <HorizontalDivider className={style.form__divider} />
                <Button
                    variant="primary"
                    size="large"
                    className={style.form__button}
                    handleClick={handleNext}
                >
                    Next
                </Button>
            </form>
            <DevTool control={control} />
        </section>
    );
};

export default Step1Page;
