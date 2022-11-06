import React, {useRef, useState} from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
const OpacitySlider = styled(Slider)({
  color: '#EB6017',
  height: '6px',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: '28px',
    width: '28px',
    backgroundColor: '#EB6017',
    border: '3px solid white',
    '&:focus, &.Mui-active, &.Mui-focusVisible, &:hover': {
      boxShadow: 'inherit',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    top: '24px',
    fontWeight: 'normal',
    backgroundColor: 'transparent',
    color: 'white',
  },
  '& .MuiSlider-rail': {
    opacity: 0,
    // backgroundColor: '#bfbfbf',
    // backgroundColor: 'red'
  },
})

const OpacityButton = styled(IconButton)({
  // color: '#52af77',
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

  const timer = useRef(null)
  const increment = () => {
    timer.current = setInterval(() => setValue(prev => value < 100 && prev + 1), 50);
  }
  const decrement = () => {
    timer.current = setInterval(() => setValue(prev => value > 0 && prev - 1), 50);
  }

  function timeoutClear() {
    clearInterval(timer.current);
  }

  return (
    <>
      <Box
        sx={{
          width: 300,
          m: 3,
          p: 1,
          backgroundColor: '#e8e8e8',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '10px',
        }}
      >
        <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
          <OpacityButton
            aria-label='minus'
            onMouseLeave={timeoutClear}
            onMouseUp={timeoutClear}
            onMouseDown={decrement}
            sx={{
              color: value === 0 ? '#8C96A0' : '#EB6017',
              backgroundColor: value === 0 ? '#EFEFEF' : 'rgba(235, 96, 23, 0.15)'
            }}
          >
            <RemoveIcon fontSize='small' />
          </OpacityButton>

          <OpacitySlider
            valueLabelDisplay='on'
            aria-label='slider'
            value={value}
            onChange={handleSliderChange}
          />
          <OpacityButton
            aria-label='plus'
            onMouseLeave={timeoutClear}
            onMouseUp={timeoutClear}
            onMouseDown={increment}
            sx={{
              color: value === 100 ? '#8C96A0' : '#EB6017',
              backgroundColor: value === 100 ? '#EFEFEF' : 'rgba(235, 96, 23, 0.15)'
            }}
          >
            <AddIcon fontSize='small' />
          </OpacityButton>
        </Stack>
      </Box>
    </>
  )
}

export default App
