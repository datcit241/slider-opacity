import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
const OpacitySlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#52af77',
    border: '2px solid #fff',
    '&:focus, &.Mui-active, &.Mui-focusVisible, &:hover': {
      boxShadow: 'inherit',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: 22,
    backgroundColor: 'unset',
    color: '#fff',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
})

const OpacityButton = styled(IconButton)({
  color: '#52af77',
  height: 23,
  width: 23,
  '&:hover, &.Mui-focusVisible': {
    backgroundColor: '#edf7f1',
  },
})

function App() {
  const [value, setValue] = useState(20)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }

  const handlePlusByOne = () => {
    if (value < 100) {
      setValue((val) => val + 1)
    }
  }

  const handleMinusByOne = () => {
    if (value > 0) {
      setValue((val) => val - 1)
    }
  }
  return (
    <>
      <Box
        sx={{
          width: 300,
          m: 3,
          p: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '10px',
        }}
      >
        <Stack spacing={1} direction='row' sx={{ mb: 1 }} alignItems='center'>
          <OpacityButton aria-label='minus' onClick={handleMinusByOne}>
            <RemoveIcon fontSize='small' />
          </OpacityButton>

          <OpacitySlider
            valueLabelDisplay='on'
            aria-label='slider'
            value={value}
            onChange={handleSliderChange}
          />
          <OpacityButton aria-label='plus' onClick={handlePlusByOne}>
            <AddIcon fontSize='small' />
          </OpacityButton>
        </Stack>
      </Box>
    </>
  )
}

export default App
