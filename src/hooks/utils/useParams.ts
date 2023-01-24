import { useStore } from '@nanostores/react'

import { router } from '../../stores/router'

export function useParams<T extends Record<string, string>>() {
  const page = useStore(router)

  return page?.params as T
}
