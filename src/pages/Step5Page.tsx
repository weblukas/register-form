import React from 'react'
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import style from './Step5Page.module.scss'
import navi_5 from '../assets/navi_5.png';
import DatePicker from '../components/DatePicker/DatePicker';

const Step5Page = () => {
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
          </form>
      </section>
  );
}

export default Step5Page