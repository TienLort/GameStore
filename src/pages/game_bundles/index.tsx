import { Container } from '@mui/material'
import React from 'react'
import GameList from './game_list'
import Content from './content_bundles'
import Filter from './filter_bundles'

const GameBundles = () => {
    return (
        <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important' }}>
            <Content />
            <Filter />
            <GameList />
        </Container>
    )
}

export default GameBundles