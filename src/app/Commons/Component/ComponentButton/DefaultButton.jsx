'use client'

import { Button } from "@mui/material"

const DefaultaButton = ({
    content,
    onClick,
    height = 45,
    borderRadius = '30px',
    widthButton = '200px',
    colorText = 'rgba(0, 57, 110, 1)',
    backgroundColor = ' rgba(255,255,255)',
    hoverBackgroundColor = '#40cca7ff',
}) => {
    return (
        <>
            <Button 
            onClick={onClick}
            sx={{
                height: height,
                display: 'flex',
                color: colorText,
                fontWeight: 'bold',
                width: widthButton,
                variant: 'contained',
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
                '&:hover': {
                    backgroundColor: hoverBackgroundColor,
                }
            }}>
                {content}
            </Button>
        </>
    )
}

export default DefaultaButton