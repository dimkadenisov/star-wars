import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material'
import { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Grid container direction="column" rowGap={3}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Star wars
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </Grid>
  )
}
