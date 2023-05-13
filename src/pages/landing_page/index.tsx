import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollTo } from 'framer-motion-scroll-to-hook';
import { RiArrowRightLine } from 'react-icons/ri';
import Transition from '../../components/transition';
import Button from '../../components/button';
import Loading from '../../components/loading';
import { IGame } from 'src/types/game';
import { Box } from '@mui/material';
import { gameApi } from '../../clients/http/game_api';
import { getPrice } from 'src/utils/function';
import { ReactComponent as GitHubLogo } from "src/assets/images/githublogo.svg";
import { ReactComponent as Enter } from 'src/assets/images/enter.svg';
import { ReactComponent as Dice } from "src/assets/images/dice.svg";
import { ReactComponent as LinkedIn } from "src/assets/images/linkedin.svg";
import { ReactComponent as Game } from "src/assets/images/game.svg";
import { ReactComponent as NotFound } from "src/assets/images/notfound.svg";
import { ReactComponent as NotFoundQuery } from "src/assets/images/notfoundquery.svg";
import { ReactComponent as Git } from "src/assets/images/git.svg";
import { ReactComponent as Performance } from "src/assets/images/performance.svg";
import { ReactComponent as Sources } from "src/assets/images/sources.svg";
import '../../scss/App.scss';
import '../../scss/_home.scss';
import ChangePage from 'src/components/change_page';

const LandingPage = () => {
  const navigate = useNavigate();
  const navigateTo = (place: string) => navigate(`/${place}`);

  return (
    <Box  >
      <div>
        <video autoPlay muted loop className='video'>
          <source src={require("src/assets/videos/Sol.mp4")} type="video/mp4" />
        </video>
        <div className='main'>
          <div className='left'>
            <div className='splash'>
              <h1>Game Store</h1>
              <p className='intro'>
                Đây là địa chỉ tốt nhất để mua các trò chơi mới với giá cạnh tranh.
                Hỗ trợ 24 giờ, bảo đảm giá tốt nhất và trải nghiệm người dùng hoàn hảo.
                Ngại gì mà không thử?
              </p>
            </div>

            <div className='buttons'>
              <button
                className='cta browseBtn'
                onClick={() => navigateTo('games')}
                aria-label="Browse"
              >
                <Enter className='ctaSVG' />
                Browse
              </button>
              <button
                className='cta'
                onClick={() => navigateTo('games')}
                aria-label="Open random game page"
              >
                <Dice className='ctaSVG' />
                Play Dice
              </button>
              <button className='cta' aria-label="View Repository" onClick={() => navigateTo('posts')}>
                <GitHubLogo className='ctaSVG' />
                GitHub
              </button>
              <button className='cta lastChild' aria-label="Open LinkedIn" onClick={() => navigateTo('home')}>
                <LinkedIn className='ctaSVG linkedin' />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>

          <div className='right'>
            <div className='buttonsRight'>
              <h2>Quick Navigation</h2>
              <button
                className='cta'
                onClick={() => navigateTo('games')}
                aria-label="Open a game page"
              >
                <Game className='ctaSVG' />
                Game Page
              </button>
              <button
                className='cta'
                onClick={() => navigateTo('games')}
                aria-label="Open 404 page"
              >
                <NotFound className='ctaSVG' />
                404 Page
              </button>
              <button
                className='cta lastChild'
                onClick={() => navigateTo('games')}
                aria-label="open 404 query page"
              >
                <NotFoundQuery className='ctaSVG' />
                404 Query
              </button>
              <a
                href="https://github.com/gianlucajahn/react-ecommerce-store/commits/main"
                rel="noreferrer"
              >
                <button className='cta' aria-label="Open commit log">
                  <Git className='ctaSVG' />
                  Commit Log
                </button>
              </a>
              <a
                href="https://github.com/gianlucajahn/react-ecommerce-store/blob/main/README.md#performance"
                rel="noreferrer"
              >
                <button
                  className='cta lastChild'
                  aria-label="Open performance test results"
                >
                  <Performance className='ctaSVG' />
                  Performance
                </button>
              </a>
              <a
                href="https://github.com/gianlucajahn/react-ecommerce-store/blob/main/README.md#technologies-used"
                rel="noreferrer"
              >
                <button
                  className='cta lastChild'
                  aria-label="View technologies used"
                >
                  <img
                    className='technologies'
                    src={require("src/assets/images/whatruns.png")}
                    alt="WhatRuns logo"
                  />
                  Technologies
                </button>
              </a>
              <a
                href="https://github.com/gianlucajahn/react-ecommerce-store/blob/main/README.md#sources"
                rel="noreferrer"
              >
                <button className='cta lastChild' aria-label="View Sources">
                  <Sources className='ctaSVG' />
                  Our Sources
                </button>
              </a>
            </div>

          </div >
        </div >
      </div >

      {/* <div className="Title">
        Visit Ubisoft universes
      </div>
      <Transition className="Home" direction="left">
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
              Go to the store <RiArrowRightLine />
            </Button>
          </Transition>
          : <Loading />
        }
      </Transition> */}
      <ChangePage />
    </Box >
  );
}

export default LandingPage






