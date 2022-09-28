export interface exchangeModel {
  date: string
  info: {
    rate: number
    timestamp: number
  }
  query: {
    amount: number
    from: string
    to: string
  }
  result: number
  success: boolean
}