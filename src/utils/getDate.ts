import { SeasonEnum } from '@/types'

const getStartMonth = (season: SeasonEnum): number => {
  switch (season) {
    case SeasonEnum.Winter:
      return 11
    case SeasonEnum.Spring:
      return 2
    case SeasonEnum.Summer:
      return 5
    case SeasonEnum.Autumn:
      return 8
    default:
      throw new Error('Invalid season')
  }
}

export const getCurrentSeason = (date: Date): SeasonEnum => {
  const month = date.getMonth()

  if (month === 11 || month === 0 || month === 1) {
    return SeasonEnum.Winter
  } else if (month === 2 || month === 3 || month === 4) {
    return SeasonEnum.Spring
  } else if (month === 5 || month === 6 || month === 7) {
    return SeasonEnum.Summer
  } else if (month === 8 || month === 9 || month === 10) {
    return SeasonEnum.Autumn
  } else {
    throw new Error('Invalid date')
  }
}

export const getDayInSeason = (date: Date, season: SeasonEnum): number => {
  const startOfSeason = new Date(date.getFullYear(), getStartMonth(season), 1)
  const timeDiff = date.getTime() - startOfSeason.getTime()
  const dayInSeason = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1

  return dayInSeason
}

export const processDate = (dateString: string): string => {
  const currentDate = new Date()
  const inputDate = new Date(
    dateString.split('.').reverse().join('-') + 'T00:00:00'
  )

  const yesterday = new Date(currentDate);
  
  yesterday.setDate(currentDate.getDate() - 1)
  yesterday.setHours(0, 0, 0, 0)

  const today = new Date(currentDate)

  today.setHours(0, 0, 0, 0)

  if (
    inputDate.getDate() === yesterday.getDate() &&
    inputDate.getMonth() === yesterday.getMonth() &&
    inputDate.getFullYear() === yesterday.getFullYear()
  ) {
    return 'Yesterday'
  } else if (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  ) {
    return 'Today'
  } else if (
    inputDate >= getStartOfWeek(currentDate) &&
    inputDate <= getEndOfWeek(currentDate)
  ) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayIndex = inputDate.getDay()

    return daysOfWeek[dayIndex]
  } else {
    const day = inputDate.getDate().toString().padStart(2, '0')
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0')
    const year = inputDate.getFullYear().toString().slice(-2)

    return `${day}/${month}/${year}`
  }
}

const getStartOfWeek = (date: Date): Date => {
  const firstDayOfWeek = 1
  const day = date.getDay()
  const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  
  return date
}

const getEndOfWeek = (date: Date): Date => {
  const lastDayOfWeek = 7
  const day = date.getDay()
  const diff = (day < lastDayOfWeek ? lastDayOfWeek : 0) - day + 6
  
  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)

  return date
}