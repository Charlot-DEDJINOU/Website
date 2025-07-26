import { useI18n } from 'vue-i18n'

export default function EducationData() {
  const { t } = useI18n()

  return [
    {
      title: t('developer_fullstack'),
      years: 'Jan 2023 - Jan 2025',
      place: 'ECOTIC, Abomey-Calavi, Benin',
      skills: [t('uml_modeling'), t('react_redux_laravel'), t('vps_deployment')]
    },
    {
      title: t('developer_frontend'),
      years: 'Apr 2024 - Sep 2024',
      place: 'SPTIC - UAC, Abomey-Calavi, Benin',
      skills: [t('uac_portal_ui'), t('api_integration')]
    },
    {
      title: t('developer_frontend'),
      years: 'Aug 2023 - Oct 2023',
      place: 'AGCS LIDAL, Abomey-Calavi, Benin',
      skills: [t('fusion_sites'), t('react_frontend')]
    }
  ]
}
