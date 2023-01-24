import { Character } from '../../types/api'
import { useQuery } from '../utils/useQuery'

export function useQueryCharacter(characterId: string) {
  return useQuery<Character>(`/people/${characterId}`)
}
