import Accordion from '../../components/Accordion';
import SectionHeader from '../../components/SectionHeader';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const data = t("faq.accordion", { returnObjects: true });
  return (
    <div className='mx-[30px]'>
      {/* section */}
      <SectionHeader heading={t('faq.heading')} />
      <p className='mx-auto text-center text-gray text-base md:text-lg leading-5 sm:leading-12 font-SGlight w-[150px] sm:w-auto'>
      {t('faq.subHeading')}
      </p>
      <div className='my-20'>
        <Accordion items={data} />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
