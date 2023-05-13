import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiArrowLeftLine } from 'react-icons/ri';
import CusButton from '../button';
import Transition from '../transition';
import { useStyles } from './styles';

interface Props {
    showStoreButton: boolean;
    title?: string;
}

const NavBar = (props: Props) => {
    const classes = useStyles();
    const { showStoreButton, title } = props;
    const navigate = useNavigate();
    const navigateToStore = () => navigate('/games');

    return (
        <nav className={classes.NavBar}>
            {showStoreButton && (
                <Transition direction="left">
                    <CusButton
                        className={classes.Store}
                        handleClick={navigateToStore}
                    >
                        <RiArrowLeftLine /> Store
                    </CusButton>
                </Transition>
            )}
            {title && <motion.h2 layout className={classes.Title}>{title}</motion.h2>}
        </nav>
    );
}

export default NavBar;
