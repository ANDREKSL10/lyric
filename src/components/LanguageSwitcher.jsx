import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const { locales, locale, asPath, push } = useRouter();

  return (
    <select
      value={locale}
      onChange={(e) => push(asPath, asPath, { locale: e.target.value })}
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

