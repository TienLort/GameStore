import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackgroundImage } from 'react-image-and-background-image-fade';
import CusButton from '../../components/button';
import Loading from '../../components/loading';
import Transition from '../../components/transition';
import Carousel from './carousel';
import Info from './info';
import { gameApi } from '../../clients/http/game_api';
import NavBar from '../../components/navbar';
import { RiAddLine, RiCheckLine } from 'react-icons/ri';
import { getPrice } from '../../utils/function';
import { IGame } from 'src/types/game';
import { Box } from '@mui/material';
import '../../scss/App.scss';
import '../../scss/_game-details.scss';
import { useScrollTo } from 'framer-motion-scroll-to-hook';

const GameDetails = () => {
    const params = useParams();
    const id = Number(params.gameId);
    const [game, setGame] = useState<IGame>();
    const [cartItems, setCartItems] = useState<IGame[]>([]);
    const addToCart = useCallback((game: IGame) => {
        setCartItems([...cartItems, game]);
    }, [cartItems]);
    const removeFromCart = useCallback((ids: number[]) => {
        setCartItems(cartItems.filter((item) => !ids.includes(item.id)));
    }, [cartItems]);
    const scrollTo = useScrollTo();
    useEffect(() => {
        scrollTo(0);
        (async () => {
            const [game, screenshots] = await Promise.all([
                gameApi.gameDetails({ id }),
                gameApi.gameScreenshots({ id }),
            ]);
            const short_screenshots = [
                { id: -1, image: game.background_image },
                ...screenshots.results,
            ];
            const price = getPrice(game);
            setGame({ ...game, short_screenshots, price });
        })();
    }, [id]);
    return (
        <Transition className="GameDetails" direction="left">
            <NavBar showStoreButton title={game?.name} />
            {game
                ? <Transition className="Grid">
                    <Carousel duration={6}>
                        {game.short_screenshots.map((screenshot) => (
                            <Box
                                key={`img-${screenshot.id}`}
                                className="Image"
                            >
                                <BackgroundImage
                                    className="BackgroundImage"
                                    wrapperClassName="Wrapper"
                                    src={screenshot.image}
                                    transitionTime="1s"
                                    isResponsive
                                    lazyLoad
                                />
                            </Box>
                        ))}
                    </Carousel>
                    <Info game={game} />
                    <Box className="Price">
                        ${game.price}
                        {cartItems.find((item) => item.id === id)
                            ? <Transition className="Added">
                                Added <RiCheckLine />
                            </Transition>
                            : <CusButton handleClick={() => addToCart(game)}>
                                Add to cart <RiAddLine />
                            </CusButton>
                        }
                    </Box>
                </Transition>
                : <Loading />
            }
        </Transition>
    );
}

export default GameDetails;
