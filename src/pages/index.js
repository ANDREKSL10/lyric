import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <LanguageSwitcher />
        <h1>{t('header_title')}</h1>
        <p>{t('slogan')}</p>
      </header>
      <main>
        <input placeholder={t('input_placeholder')} />
        <button>{t('search_button')}</button>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

