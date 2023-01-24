import { Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import { ContentState } from '../../../../components/ContentState'
import { useQueryCharacter } from '../../../../hooks/api/useQueryCharacter'
import { useParams } from '../../../../hooks/utils/useParams'
import { ChipsRow } from '../ChipsRow'
import { PropertiesForm } from '../PropertiesForm'
import { PropertiesTable } from '../PropertiesTable'

export function CharacterInfo() {
  const { characterId } = useParams<{ characterId: string }>()
  const { data, isLoading, error } = useQueryCharacter(characterId)
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <ContentState loading={isLoading} error={error}>
      {data && (
        <Stack spacing={2}>
          <Typography variant="h2" component="h1">
            {data.name}
          </Typography>
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <ChipsRow gender={data.gender} birthYear={data.birth_year} />
            <Button variant="outlined" onClick={() => setIsEditMode((prev) => !prev)}>
              {isEditMode ? 'Save' : 'Edit'}
            </Button>
          </Stack>
          {isEditMode ? <PropertiesForm data={data} /> : <PropertiesTable data={data} />}
        </Stack>
      )}
    </ContentState>
  )
}
