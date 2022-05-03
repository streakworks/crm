import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import AutocompleteCombo from './AutocompleteCombo'
import AsyncAutocomplete from './AsyncAutocomplete'
import BadgeAutocomplete from './BadgeAutocomplete'
import LocalizationProvider from '../DatePicker'
import { Box, styled } from '@mui/system'
import { Grid, Card } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
    margin: '25px',
    [theme.breakpoints.down('sm')]: {
        margin: '10px',
    },
    '& .breadcrumb': {
        marginBottom: '25px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10px',
        },
    },
}))

const AppAutoComplete = () => {
    return (
        <Container>
            {/* <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Autocomplete' },
                    ]}
                />
            </div> */}
            {/* <SimpleCard title="autocomplete combo">
                <AutocompleteCombo />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Asyncronous Autocomplete">
                <AsyncAutocomplete></AsyncAutocomplete>
            </SimpleCard> 
            <Box py="12px" />
            */}
            
            <SimpleCard>
                <BadgeAutocomplete></BadgeAutocomplete>
               
            </SimpleCard>
        </Container>
    )
}

export default AppAutoComplete
