import { FormControl, MenuItem } from '@mui/material';
import Input from '../components/Input/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './Step3Page.module.scss';
import { languages } from '../utilitis/data';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import navi_3 from '../assets/navi_3.png';

const Step3Page = () => {
    
   

  const { control, handleSubmit } = useForm();

    return (
        <section className={style.section}>
            {/* <img
                src={navi_3}
                alt="step 1 image"
                className={style.section__image}
            /> */}
            <span>Step 2</span>
            <ProgressBar progress={2} />
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
            <FormControl fullWidth>
                <Input
                    select
                    label="Languages"
                    name="languages"
                    control={control}
                >
                    {languages.map((language) => (
                        <MenuItem key={language.value} value={language.value}>
                            {language.label}
                        </MenuItem>
                    ))}
                </Input>
            </FormControl>
        </section>
    );
};

export default Step3Page;
