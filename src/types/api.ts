export type APIEntity = Record<string, unknown> | string | number

export type APIResponsePaginated<T extends APIEntity> = {
  count: number
  previous: string | null
  next: string | null
  results: T[]
}

export type Gender = 'male' | 'female' | 'n/a'

export type Character = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: Gender
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}
