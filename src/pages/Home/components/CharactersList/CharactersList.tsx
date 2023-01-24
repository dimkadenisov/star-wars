import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemButton } from '@mui/material'
import { openPage } from '@nanostores/router'
import { useMemo } from 'react'

import { ContentState } from '../../../../components/ContentState'
import { useQueryCharacters } from '../../../../hooks/api/useQueryCharacters'
import { router } from '../../../../stores/router'
import { Character } from '../../../../types/api'
import { getAvatarLetters } from '../../../../utils/getAvatarLetters'
import { getCharacterIdFromURL } from '../../../../utils/getCharacterIdFromURL'
import { stringToColor } from '../../../../utils/stringToColor'

export function CharactersList({ search }: { search?: string }) {
  const { data, isLoading, setSize } = useQueryCharacters({
    params: search ? { search } : undefined,
    config: { keepPreviousData: true },
  })

  const total = useMemo(() => (data ? data.at(-1)?.count : 0), [data])
  const items = useMemo(() => {
    if (!data) return []

    return data.reduce((acc, curr) => {
      acc.push(...curr.results)

      return acc
    }, [] as Character[])
  }, [data])

  return (
    <ContentState
      loading={!data && isLoading}
      custom={items?.length === 0}
      customComponent={
        <Grid container justifyContent="center" padding={2}>
          Nothing was found
        </Grid>
      }
    >
      {/* TODO: better indication of loading new results */}
      <List sx={{ opacity: isLoading ? 0.5 : 1 }}>
        {items.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton
              onClick={() =>
                openPage(router, 'character', {
                  characterId: getCharacterIdFromURL(item.url) || '',
                })
              }
            >
              <ListItemAvatar>
                <Avatar alt={item.name} sx={{ backgroundColor: stringToColor(item.name) }}>
                  {getAvatarLetters(item.name)}
                </Avatar>
              </ListItemAvatar>
              {item.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* TODO: add loading on next chunk loading */}
      {items.length < Number(total) && (
        <Button fullWidth onClick={() => setSize((prevSize) => prevSize + 1)}>
          Load more
        </Button>
      )}
    </ContentState>
  )
}
