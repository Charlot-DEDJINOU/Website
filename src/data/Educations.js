import { useI18n } from 'vue-i18n'

export default function EducationData() {
  const { t } = useI18n()

  return [
    {
      title: t('bachelor'),
      years: '2021-2024',
      place: t('ifri')
    },
    {
      title: t('mastercard'),
      years: '2021-2024',
      place: t('university_abomey')
    },
    {
      title: t('bachelor_science'),
      years: '2021',
      place: t('cotonou')
    }
  ]
}
