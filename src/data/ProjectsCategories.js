import { useI18n } from 'vue-i18n'

export default function ProjectsCategory() {
  const { t } = useI18n()

  return [t('iot'), t('data_science'), t('web'), t('mobile'), t('programming'), t('websocket')]
}
