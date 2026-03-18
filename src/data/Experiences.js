import { useI18n } from 'vue-i18n'

export default function EducationData() {
  const { t } = useI18n()

  return [
    {
      title: t('developer_mobile'),
      years: 'Jul 2025 - Present',
      place: 'Sankofa Shop, France (Remote)',
      skills: [t('sankofa_mobile_app'), t('sankofa_mobile_first')]
    },
    {
      title: t('cto_fullstack'),
      years: 'Jan 2023 - Dec 2025',
      place: 'ECOTIC, Abomey-Calavi, Benin',
      skills: [t('ecotic_aiot_prototype'), t('ecotic_vps_deployment')]
    },
    {
      title: t('intern_frontend'),
      years: 'Apr 2024 - Sep 2024',
      place: 'SPTIC - UAC, Abomey-Calavi, Benin',
      skills: [t('sptic_portal'), t('sptic_optimization')]
    }
  ]
}
