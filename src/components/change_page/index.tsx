import { motion, useIsPresent } from 'framer-motion';
import '../../scss/App.scss';
import React from 'react';

const ChangePage = () => {
    const isPresent = useIsPresent();
    return (
        <motion.div
            initial={{ scaleY: 1.5 }}
            animate={{ scaleY: 0, transition: { duration: 1, ease: "circOut" } }}
            exit={{ scaleY: 1.5, transition: { duration: 1, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
        />
    );
}

export default ChangePage;
