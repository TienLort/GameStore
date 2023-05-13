import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/scss/_home.scss';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
interface IProps {
    dots?: boolean;
    infinite?: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay?: boolean;
    autoplaySpeed?: number,
    pauseOnHover?: boolean;
    children: React.ReactNode;
}

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <ArrowForwardIos
            className={className}
            sx={{
                ...style,
                color: 'white !important',

            }}
            onClick={onClick} />
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <ArrowBackIosNew
            className={className}
            sx={{
                ...style,
                color: 'white !important',
            }}
            onClick={onClick} />
    );
}

export const SlickSlider = (props: IProps) => {
    const {
        dots = true,
        infinite = false,
        slidesToShow,
        slidesToScroll,
        autoplay = false,
        autoplaySpeed,
        pauseOnHover = false,
        children
    } = props;

    const settings = {
        dots: dots,
        dotsClass: "slick-dots slick-thumb",
        infinite: infinite,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        pauseOnHover: pauseOnHover,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
};
