import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useIsPresent } from 'framer-motion';
import { useScrollTo } from 'framer-motion-scroll-to-hook';
import { useWindowWidth } from '@react-hook/window-size';
import Transition from '../../components/transition';
import Loading from '../../components/loading';
import Grid from './grid';
import NavBar from '../../components/navbar';
import { IGame } from 'src/types/game';
import { gameApi } from '../../clients/http/game_api';
import { getPrice } from 'src/utils/function';
import '../../scss/App.scss';
import '../../scss/_game-list.scss';
import ChangePage from 'src/components/change_page';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const loadGames = async (search = '') => {
    const response = await gameApi.gameList({ page_size: 50, search });
    let { results } = response;
    results = results.filter((game) => game.ratings_count > (search ? 50 : 10));
    results.forEach((game) => game.price = getPrice(game));
    return results;
};

const minCardWidth = 330;
let scrollY = 0;

function GameList() {
    const [games, setGames] = useState<IGame[] | null>(null);
    const [columnsCount, setColumnsCount] = useState(1);
    const windowWidth = useWindowWidth();
    const [searchParams] = useSearchParams();
    const scrollTo = useScrollTo();
    const isPresent = useIsPresent();

    const [cartItems, setCartItems] = useState<IGame[]>([]);
    const location = useLocation();
    console.log(location);
    const addToCart = useCallback((game: IGame) => {
        setCartItems([...cartItems, game]);
    }, [cartItems]);
    const removeFromCart = useCallback((ids: number[]) => {
        setCartItems(cartItems.filter((item) => !ids.includes(item.id)));
    }, [cartItems]);

    useEffect(() => {
        setColumnsCount(Math.floor(windowWidth / minCardWidth) || 1);
    }, [windowWidth]);
    useEffect(() => {
        !isPresent && ({ scrollY } = window);
    }, [isPresent]);
    useEffect(() => {
        if (location.pathname === '/games') {
            setGames(null);
            if (location.search) {
                ({ scrollY } = window);
                scrollTo();
                (async () => setGames(await loadGames(searchParams.get('search') || '')))();
            } else {
                scrollTo(scrollY);
                (async () => setGames(await loadGames()))();
            }
        }
    }, [searchParams, location]);

    return (
        <>
            <Transition className="GameList" direction="right">
                <NavBar
                    showStoreButton={!!location.search}
                    title={searchParams.get('search') || 'New and trending'}
                />
                {!location.search && <Typography sx={{ color: '#fff', fontSize: '16px', paddingLeft: '4px', marginBottom: 'min(4.5vw, 30px)' }}>Based on player counts and ratings</Typography>}
                {games
                    ? games.length
                        ? < Grid
                            games={games}
                            cartItems={cartItems}
                            addToCart={addToCart}
                            columnsCount={columnsCount}
                        />
                        : <Transition className="NoGames">No games found.</Transition>
                    : <Loading />
                }
            </Transition>
            <ChangePage />
        </>
    );
}

export default GameList;
