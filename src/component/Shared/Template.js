import React from 'react'
import { Stack } from 'react-bootstrap'

const Template = ({children,title,para,className}) => {
    return (
        <Stack className={`rounded-5 text-center mt-5 ${className}`}>
            <h3 className='text-center px-5 fs-title'>{title}</h3>
            <p className='text-center px-3 fs-subtitle'>{para}</p>
            {children}
        </Stack>
    )
}

export default Template