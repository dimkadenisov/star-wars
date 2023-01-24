import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'

import { APIEntity, APIResponsePaginated } from '../../types/api'
import { defaultFetcher } from '../../utils/defaultFetcher'

export function useInfiniteQuery<T extends APIResponsePaginated<APIEntity>>({
  url,
  params,
  config,
}: {
  url: string
  // TODO do not restrict values to be strings
  params?: Record<string, string>
  config?: SWRInfiniteConfiguration
}) {
  // TODO: better build searchParams with qs for example
  const searchParams = new URLSearchParams(params)

  return useSWRInfinite<T>(
    (pageIndex, previousPageData: APIResponsePaginated<APIEntity>) => {
      if (previousPageData && !previousPageData.next) return null

      searchParams.set('page', String(pageIndex + 1))

      return `${url}?${searchParams.toString()}`
    },
    defaultFetcher,
    { revalidateFirstPage: false, ...config },
  )
}
