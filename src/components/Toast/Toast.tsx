import React, { FC, useEffect } from 'react'
import { enqueueSnackbar} from 'notistack'
interface ToastProps {
  message: string
  variant: string
}
const Toast: FC<ToastProps> = ({
    message,variant
  
}) => {
  
    useEffect(
        () =>{
            enqueueSnackbar(message, { variant });
        },[]
    )
    return null
}

export default Toast;
