import { SWRInfiniteConfiguration } from 'swr/infinite'

import { APIResponsePaginated, Character } from '../../types/api'
import { useInfiniteQuery } from '../utils/useInfiniteQuery'

export function useQueryCharacters({
  params,
  config,
}: {
  // TODO add more strict types for params
  params?: Record<string, string>
  config?: SWRInfiniteConfiguration
}) {
  return useInfiniteQuery<APIResponsePaginated<Character>>({ url: '/people', params, config })
}
