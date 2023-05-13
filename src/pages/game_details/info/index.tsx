import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollTo } from 'framer-motion-scroll-to-hook';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import CusButton from '../../../components/button';
import Transition from '../../../components/transition';

import { IGame } from 'src/types/game';
import { Box, Typography } from '@mui/material';
import AnimatedScroll from 'src/components/animate_scroll';

function Info({ game }: { game: IGame }) {
    const {
        name,
        description_raw,
        released,
        platforms,
        genres,
        website,
        developers,
        publishers,
    } = game;
    const [isExpanded, setIsExpanded] = useState(false);
    const scrollTo = useScrollTo();

    return (
        <Transition className="Info">
            <Box className="About">
                <Typography variant='h4'>About</Typography>
                {description_raw.split('###').map((p, index) => (
                    <Typography key={index}>{p}</Typography>
                ))}
            </Box>
            <motion.div
                className="MoreInfo"
                initial={false}
                animate={{ minHeight: isExpanded ? '220px' : '60px' }}
            >
                {isExpanded
                    ? <>
                        <Transition
                            key="expanded"
                            className="Expanded"
                            direction="up"
                            distance={30}
                        >
                            <a href={website} target="_blank" rel="noreferrer">
                                {name} Website
                            </a>
                            <Typography>Released: {new Date(released).toLocaleDateString()}</Typography>
                            <Typography>Platforms: {platforms.map((p) => p.platform.name).join(', ')}</Typography>
                            <Typography>Genres: {genres.map((g) => g.name).join(', ')}</Typography>
                            <Typography>Developers: {developers.map((d) => d.name).join(', ')}</Typography>
                            <Typography>Publishers: {publishers.map((p) => p.name).join(', ')}</Typography>
                        </Transition>
                        <motion.div className="Expand" layoutId="expand-button">
                            <CusButton handleClick={() => setIsExpanded(false)}>
                                Hide <RiArrowUpSLine />
                            </CusButton>
                        </motion.div>
                    </>
                    : <motion.div className="Expand" layoutId="expand-button">
                        <CusButton handleClick={() => {
                            setIsExpanded(true);
                            scrollTo(150);
                        }}>
                            More <RiArrowDownSLine />
                        </CusButton>
                    </motion.div>
                }
            </motion.div>
        </Transition>
    );
}

export default Info;
