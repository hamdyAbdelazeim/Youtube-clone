import React from 'react'
import { Box, CircularProgress, Stack } from '@mui/material'

const Loader = () => (
  <Box minHeight='95vh'>
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      height='80vh'
    >
      <CircularProgress color='secondary' size={150} />
    </Stack>
  </Box>
)

export default Loader
