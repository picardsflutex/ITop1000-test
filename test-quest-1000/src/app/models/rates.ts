export interface rateModel {
  base: string
  date: string
  rates: {
    UAH: number
    USD: number
    EUR: number
  }
  success: boolean
  timestamp: number
}