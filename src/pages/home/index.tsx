import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollTo } from 'framer-motion-scroll-to-hook';
import { RiArrowRightLine } from 'react-icons/ri';
import Transition from '../../components/transition';
import Button from '../../components/button';
import Loading from '../../components/loading';
import GameCard from './card';
import { IGame, IGameHome } from 'src/types/game';
import { Box } from '@mui/material';
import { gameApi } from '../../clients/http/game_api';
import { getPrice } from 'src/utils/function';
import '../../scss/App.scss';
import '../../scss/_home.scss';
import ChangePage from 'src/components/change_page';
import Banner from 'src/components/banner';
import { useAppDispatch, useAppSelector } from 'src/redux_store';
import { getGames } from "src/redux_store/games/games_action";
import FlashDeals from './flash_deals';
import FeatureGames from './feature_games';
import MostWanted from './most_wanted';
import { GrFormNext } from 'react-icons/gr';
import { NavigateNext } from '@mui/icons-material';
import GamersRecommend from './gamers_recommend';
import FanaticalBlog from './fanatical_blog';

const cardDuration = 10;
const cycleArray = (array: unknown[]) => {
  const newArray = [...array];
  newArray.push(newArray.shift());
  return newArray;
};
const getRandomItems = (items: unknown[], length: number) => {
  const randomItems = new Set();
  while (randomItems.size < length) {
    const index = Math.floor(Math.random() * items.length);
    randomItems.add(items[index]);
  }
  return [...randomItems];
};
const loadGames = async (search = '') => {
  const response = await gameApi.gameList({ page_size: 50, search });
  let { results } = response;
  results = results.filter((game) => game.ratings_count > (search ? 50 : 10));
  results.forEach((game) => game.price = getPrice(game));
  return results;
};

const Home = () => {
  const [games, setGames] = useState<IGame[]>();
  const scrollTo = useScrollTo();
  const navigate = useNavigate();
  const navigateToStore = () => navigate('/games');
  const navigateToPosts = () => navigate('/posts');

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.gameSlice);
  const [gamesHome, setGamesHome] = useState<IGameHome[]>([]);
  const [gamesDeal, setGamesDeal] = useState<IGameHome[]>([]);
  useEffect(() => {
    dispatch(getGames()).unwrap().then((data) => {
      setGamesHome(getRandomItems(data, 4) as IGameHome[]);
      setGamesDeal(getRandomItems(data, 8) as IGameHome[]);
    });
    let interval: NodeJS.Timer;
    (async () => {
      const loadedGames = await loadGames();
      const games = getRandomItems(loadedGames, 4) as IGame[];
      setGames(games);
      interval = setInterval(() => {
        setGames(games => cycleArray(games as IGame[]) as IGame[]);
      }, cardDuration * 1000);
    })();
    scrollTo();
    return () => clearInterval(interval);
  }, []);
  console.log(data);
  return (
    <Box>
      <Banner />
      <div className="Title">
        Visit Ubisoft universes
      </div>
      {/* <Transition className="Home" direction="left">
        {games
          ? < Transition className="Grid">
            {games.map(({ id, name, background_image }, i) => (
              <GameCard
                key={id}
                id={id}
                name={name}
                backgroundImage={background_image}
                duration={cardDuration}
                big={i === 0}
              />
            ))}
            <Button
              className="Store"
              handleClick={navigateToStore}
            >
              View All Now <RiArrowRightLine />
            </Button>
          </Transition>
          : <Loading />
        }
      </Transition> */}
      <FeatureGames />
      <FlashDeals gamesHome={gamesHome} />
      <MostWanted gamesDeal={gamesDeal} />
      <ChangePage />
      <GamersRecommend gamesHome={gamesHome} />
      <FanaticalBlog />
    </Box >
  );
}

export default Home






