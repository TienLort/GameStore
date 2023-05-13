import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import 'src/scss/_home.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { SlickSlider } from 'src/components/slick_slider';
import { IGameHome } from 'src/types/game';
import { Box } from '@mui/material';
interface IProps {
  gamesDeal: IGameHome[]
}
const MostWanted = ({ gamesDeal }: IProps) => {
  return (
    <div className="WantedSlider">
      <SlickSlider infinite={true} slidesToScroll={2} slidesToShow={4} autoplay={true} autoplaySpeed={4000} pauseOnHover={true}>
        {/* <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div> */}
        {gamesDeal.map((newItem, index) => (
          <Box key={index}>
            <img src={newItem.avatar} />
          </Box>
        ))}
      </SlickSlider>
    </div>
  );
}


export default MostWanted






