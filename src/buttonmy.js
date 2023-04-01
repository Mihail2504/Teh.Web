import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons(props) {
    const { onClick } =props
    const handleClick = () => {
        onClick()
    }
    const handleAlert = () => {
        console.log("Дубовый Михаил")
        alert("Добрый день")
    }
    return (
        <Stack direction="row" spacing={2}>
            <Button color="secondary" onClick={handleClick}>Show Contetn</Button>
            <Button variant="contained" color="success" onClick={handleClick} >
                Show input field
            </Button>
            <Button variant="outlined" color="error" onClick={handleAlert} >
                Console log
            </Button>
        </Stack>
    );
}