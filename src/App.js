import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from './components'
import ErrorPage from './components/ErrorPage'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
