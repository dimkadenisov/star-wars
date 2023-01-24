import { ReactNode } from 'react'

export type ContentStateProps = {
  children: ReactNode
  loading: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
  loadingComponent?: ReactNode
  errorComponent?: ReactNode
} & ({ custom: boolean; customComponent: ReactNode } | { custom?: never; customComponent?: never })
