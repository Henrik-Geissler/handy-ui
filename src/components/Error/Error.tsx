import React, { FC, useEffect } from 'react'

interface ErrorProps {
    name?:string
    code?:number
    message?:string
}
const Error: FC<ErrorProps> = ({
 name,code,message
}) => {

    useEffect(() =>{
    
    throw{
        error: name ||'Exception from ErrorComponent',
        code: code || 0,
        errorInfo:message||'No further Information'
    }
    },[])
    return null
}

export default Error;
