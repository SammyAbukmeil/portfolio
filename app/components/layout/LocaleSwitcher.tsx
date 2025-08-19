import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      <option value="en">{t('locale', { locale: 'en' })}</option>
      <option value="jp">{t('locale', { locale: 'jp' })}</option>
    </LocaleSwitcherSelect>
  );
}