import React from 'react'
import { Box, useTheme ,styled} from '@mui/system'
import { Chip, TextField, Autocomplete,Card } from '@mui/material'
import LocalizationProvider from '../DatePicker'

const BadgeAutocomplete = () => {
    const theme = useTheme()
    

    return (
        <Box
            sx={{
                width: 620,
                '& > * + *': {
                    marginTop: theme.spacing(3),
                },
            }}
        >
            <Autocomplete
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Select Restaurants"
                        placeholder="Favorites"
                        fullWidth
                    />
                )}
            />
        </Box>
    )
}

export default BadgeAutocomplete

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Bombay Food', year: 1994 },
    { title: 'The Indian Food', year: 1972 },
    { title: 'Native Food', year: 1958 },
    { title: 'Café Jack ', year: 1983 },
    { title: 'Reserve Resto Bars', year: 1992 },
    { title: 'Cheeze Special', year: 1995 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'My Fav Restaurent', year: 2001 },
    { title: 'The Kid Menu', year: 1921 },
    { title: 'M', year: 1931 },
    { title: 'Bread Story', year: 2009 },
    { title: 'Tandoor  rest', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Italian', year: 1975 },
]
