import { ReactNode } from 'react'

import { Character } from '../../types/api'

export const CHARACTER_PROPERTIES: {
  dataKey: keyof Character
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  format?: (value: any) => ReactNode
}[] = [
  {
    dataKey: 'height',
    label: 'height',
    format: (value: string) => `${value} cm`,
  },
  {
    dataKey: 'mass',
    label: 'mass',
    format: (value: string) => `${value} kg`,
  },
  {
    dataKey: 'hair_color',
    label: 'hair color',
  },
  {
    dataKey: 'skin_color',
    label: 'skin color',
  },
  {
    dataKey: 'eye_color',
    label: 'eye color',
  },
  {
    dataKey: 'birth_year',
    label: 'birth year',
  },
  {
    dataKey: 'gender',
    label: 'gender',
  },
]
