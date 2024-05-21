import yats from '../assets/award_yats-min.jpg'
import ewaste from '../assets/award_ewaste-min.png'
import maic from '../assets/award_maic-min.png'
import auf from '../assets/award_auf-min.png'
import hackathon_ia from './../assets/hackathon_ia-min.jpeg'
import { useI18n } from 'vue-i18n'

export default function Awards() {
  const { t } = useI18n()

  return [
    {
      image: hackathon_ia,
      title: t('award_hackathonIA_title'),
      organization: t('award_hackathonIA_organization'),
      theme: t('award_hackathonIA_theme'),
      date: t('award_hackathonIA_date'),
      range: t('award_hackathonIA_range'),
      description: t('award_hackathonIA_description')
    },
    {
      image: maic,
      title: t('award_maic_title'),
      organization: t('award_maic_organization'),
      theme: t('award_maic_theme'),
      date: t('award_maic_date'),
      range: t('award_maic_range'),
      description: t('award_maic_description')
    },
    {
      image: ewaste,
      title: t('award_ewaste_title'),
      organization: t('award_ewaste_organization'),
      theme: t('award_ewaste_theme'),
      date: t('award_ewaste_date'),
      range: t('award_ewaste_range'),
      description: t('award_ewaste_description')
    },
    {
      image: yats,
      title: t('award_yats_title'),
      organization: t('award_yats_organization'),
      theme: t('award_yats_theme'),
      date: t('award_yats_date'),
      range: t('award_yats_range'),
      description: t('award_yats_description')
    },
    {
      image: auf,
      title: t('award_auf_title'),
      organization: t('award_auf_organization'),
      theme: t('award_auf_theme'),
      date: t('award_auf_date'),
      range: t('award_auf_range'),
      description: t('award_auf_description')
    }
  ]
}
