import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function InputField() {
  const [value, setValue] = useState(0)
  const handleBlurTextField = (e) => {
    const val = Number(e.currentTarget.value)
    const flag = Number.isInteger(val)
    if (val < 1 || !flag) setValue(1)
  }
  return (
    <form noValidate autoComplete='off'>
      <div>
        <TextField
          id='outlined-number'
          label='Text Field'
          type='number'
          value={value}
          InputProps={{ inputProps: { min: '1', step: '1' } }}
          variant='outlined'
          onChange={(e) => setValue(e.currentTarget.value)}
          onBlur={handleBlurTextField}
        />
      </div>
    </form>
  )
}
