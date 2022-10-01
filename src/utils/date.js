import { format } from 'date-fns'

export function getDateFormat(date) {
  return format(new Date(date), 'dd.MM.yyyy')
}
