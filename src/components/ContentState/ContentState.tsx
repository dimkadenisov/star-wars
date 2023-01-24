import { CircularProgress, Grid } from '@mui/material'

import { ContentStateProps } from './types'

function DefaultErrorComponent() {
  return <span>Something went wrong...</span>
}

function DefaultLoadingComponent() {
  return (
    <Grid container justifyContent="center" padding={2}>
      <CircularProgress />
    </Grid>
  )
}

export function ContentState({
  error,
  children,
  loading,
  custom,
  customComponent: CustomComponent,
  errorComponent: ErrorComponent = <DefaultErrorComponent />,
  loadingComponent: LoadingComponent = <DefaultLoadingComponent />,
}: ContentStateProps) {
  if (error) {
    return <>{ErrorComponent}</>
  }

  if (loading) {
    return <>{LoadingComponent}</>
  }

  if (custom) {
    return <>{CustomComponent}</>
  }

  return <>{children}</>
}
