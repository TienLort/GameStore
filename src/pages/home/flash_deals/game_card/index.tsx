import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundImage } from 'react-image-and-background-image-fade';
import {
    RiGlobalLine,
    RiWindowsFill,
    RiAndroidFill,
    RiPlaystationFill,
    RiXboxFill,
    RiAppleFill,
    RiAddLine,
    RiCheckLine,
} from 'react-icons/ri';
import {
    SiIos,
    SiLinux,
    SiNintendoswitch,
} from 'react-icons/si';
import Transition from 'src/components/transition';
import Button from 'src//components/button';
import { useNavigate } from 'react-router-dom';
import { IGame, IGameHome } from 'src/types/game';

interface Props {
    game: IGameHome;
}

const platformIcons: Record<string, React.ReactNode> = {
    web: <RiGlobalLine />,
    pc: <RiWindowsFill />,
    android: <RiAndroidFill />,
    ios: <SiIos />,
    playstation: <RiPlaystationFill />,
    xbox: <RiXboxFill />,
    mac: <RiAppleFill />,
    linux: <SiLinux />,
    nintendo: <SiNintendoswitch />,
};

function GameCard(props: Props) {
    const { game } = props;
    const {
        id,
        name,
        price,
        createdAt,
        avatar,
    } = game;
    const releasedDate = new Date(createdAt).toLocaleDateString();
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const navigateToGame = () => navigate(`/games/${id}`);

    return (
        <div className="GameCard">
            <motion.div
                className="Image"
                whileHover={{ height: 180 }}
                onClick={navigateToGame}
            >
                <BackgroundImage
                    className="BackgroundImage"
                    wrapperClassName="Wrapper"
                    src={avatar || ''}
                    transitionTime="1s"
                    isResponsive
                    lazyLoad
                />
            </motion.div>
            <motion.div
                className="Info"
                whileHover={{ height: 180 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <div className="Price">
                    <Transition className="Added">Added <RiCheckLine /></Transition>
                    ${price}
                </div>
                <Button className="Name" handleClick={navigateToGame}>
                    {name}
                </Button>
                <AnimatePresence>
                    {isHovered && (
                        <Transition className="MoreInfo">
                            <div className="Released">Released: {releasedDate}</div>
                            <div className="Genres">Genres: {releasedDate}</div>
                        </Transition>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default GameCard;
