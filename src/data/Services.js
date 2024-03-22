import { useI18n } from 'vue-i18n'

export default function Services() {
  const { t } = useI18n()

  return [
    {
      icon: 0,
      title: t('web_development'),
      description: t('web_development_description')
    },
    {
      icon: 1,
      title: t('mobile_apps'),
      description: t('mobile_apps_description')
    },
    {
      icon: 2,
      title: t('api_development'),
      description: t('api_development_description')
    },
    {
      icon: 3,
      title: t('data_analysis'),
      description: t('data_analysis_description')
    },
    {
      icon: 4,
      title: t('iot_solutions'),
      description: t('iot_solutions_description')
    },
    {
      icon: 5,
      title: t('user_interfaces'),
      description: t('user_interfaces_description')
    }
  ]
}
