import { Stack, TextField } from '@mui/material'

import { Character } from '../../../../types/api'
import { CHARACTER_PROPERTIES } from '../../constants'

export function PropertiesForm({ data }: { data: Character }) {
  return (
    <Stack spacing={1}>
      {CHARACTER_PROPERTIES.map((property, index) => (
        <TextField
          autoFocus={!index}
          fullWidth
          key={property.dataKey}
          variant="standard"
          defaultValue={data[property.dataKey]}
          label={property.label}
        />
      ))}
    </Stack>
  )
}
