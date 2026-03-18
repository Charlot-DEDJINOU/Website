import { useI18n } from 'vue-i18n'

export default function EducationData() {
  const { t } = useI18n()

  return [
    {
      title: t('bachelor'),
      years: 'Oct 2021 - Oct 2024',
      place: t('ifri'),
      skills: [
        t('mention_tb_1615'),
        t('rank_2nd_promotion'),
        t('mastercard_scholar'),
        t('thesis_smart_parking')
      ]
    },
    {
      title: t('bachelor_science'),
      years: '2014 - 2021',
      place: t('cotonou'),
      skills: [
        t('mention_tb_1681'),
        t('rank_1st_promotion'),
        t('top_01_percent')
      ]
    }
  ]
}
