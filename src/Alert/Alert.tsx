import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

type AlertColor = 'success' | 'info' | 'warning' | 'error'

interface SnackbarStatus {
  status: AlertColor
  message: String
  setAlert: React.Dispatch<React.SetStateAction<any>>
  setClose?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CustomizedSnackbars({
  status,
  message,
  setAlert,
  setClose,
}: SnackbarStatus) {
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    console.log('Snackabr closed')
    setAlert({
      display: false,
      severityType: 'error',
      message: '',
    })
    if(setClose){
setClose(false)
    }
    
    setOpen(false)
  }

  React.useEffect(() => {
    // setOpen()
  }, [])

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
