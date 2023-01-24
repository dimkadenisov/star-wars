import useSWR from 'swr'

import { defaultFetcher } from '../../utils/defaultFetcher'

// TODO add ability to pass useSWR config
export function useQuery<TData>(key: string) {
  return useSWR<TData>(key, defaultFetcher)
}
