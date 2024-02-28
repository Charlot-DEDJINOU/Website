import { useI18n } from 'vue-i18n'

export default function EducationData() {
  const { t } = useI18n()

  return [
    {
      title: t('developer_frontend'),
      years: 'Aug 2023 - Oct 2023',
      place: 'AGCS LIDAL, Abomey-Calavi, Benin',
      skills: [t('fusion_sites'), t('react_frontend'), t('troubleshooting')]
    },
    {
      title: t('developer_fullstack'),
      years: 'Jan 2023 - Mar 2023',
      place: 'Hackaton SENE, Digital Directorate, Benin',
      skills: [t('uml_modeling'), t('figma_mockup'), t('react_frontend_dev'), t('laravel_api')]
    }
  ]
}
