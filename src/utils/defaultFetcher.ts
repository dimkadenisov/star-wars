import { API_BASE_URL } from '../constants/api'

export function defaultFetcher(path: string) {
  return fetch(`${API_BASE_URL}${path}`).then((r) => r.json())
}
