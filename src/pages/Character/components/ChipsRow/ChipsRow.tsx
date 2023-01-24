import { Chip, Stack } from '@mui/material'

import { Gender } from '../../../../types/api'
import { checkGender } from '../../../../utils/checkGender'

export function ChipsRow({ gender, birthYear }: { gender: Gender; birthYear: string }) {
  return (
    <Stack direction="row" spacing={1}>
      {checkGender(gender) && <Chip color="primary" label={gender} />}
      <Chip color="secondary" label={birthYear} />
    </Stack>
  )
}
