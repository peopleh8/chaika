import { ReactNode } from 'react'

// Season
export enum SeasonEnum {
  Winter,
  Spring,
  Summer,
  Autumn
}

// Transactions
export type TransactionProps = {
  id: number,
  type: string,
  price: number,
  name: string,
  desc: string,
  discount?: number | string,
  date: string,
  status: string,
  authorizedUser: string,
}

export type TransactionsProps = {
  data: TransactionProps[],
  observer?: any,
  totalCount?: any,
  balance?: number,
}

// Children
export type ChildrenProps = {
  children: ReactNode
}

// Detail
export type DetailProps = {
  data: TransactionProps
}

// Seo
export type SeoProps = {
  title: string,
}

// Header
export type HeaderType = {
  date: Date,
  balance: number,
  avaliable: number,
  points: string,
}

// Header Card
export type CardType = {
  isIcon: boolean,
  title: string,
  date?: Date,
  balance?: number,
  avaliable?: number,
  points?: string,
}