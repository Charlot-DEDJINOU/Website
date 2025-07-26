import { useI18n } from 'vue-i18n'

export default function EducationData() {
  const { t } = useI18n()

  return [
    {
      title: t('bachelor'),
      years: 'Oct 2021 - Mar 2025',
      place: t('ifri'),
      skills: [t('mention_tb_1614'), t('software_engineering')]
    },
    {
      title: t('mastercard'),
      years: 'Oct 2021 - Oct 2024',
      place: t('university_abomey'),
      skills: [t('mastercard_scholar'), t('cohort_leader')]
    },
    {
      title: t('bachelor_science'),
      years: '2014 - 2021',
      place: t('cotonou'),
      skills: [t('mention_tb_1681'), t('class_leader')]
    }
  ]
}
