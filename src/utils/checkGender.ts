import { Gender } from '../types/api'

export function checkGender(gender: Gender | undefined) {
  return gender ? !(gender === 'n/a') : false
}
