import dayjs from 'dayjs'
import type { ConfigType } from 'dayjs'
import {
  DATE_FORMAT_DEFAULT,
  DATETIME_FORMAT_DEFAULT
} from '@/config/date.config'
import 'dayjs/locale/ja'

dayjs.locale('ja')

export function formatDate(
  date: ConfigType,
  format: string = DATE_FORMAT_DEFAULT
): string {
  return dayjs(date).format(format)
}

export function formatDateTime(
  date: ConfigType,
  format: string = DATETIME_FORMAT_DEFAULT
): string {
  return dayjs(date).format(format)
}

export default dayjs
