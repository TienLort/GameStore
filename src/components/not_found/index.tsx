import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Transition from '../transition';
import { useStyles } from './styles';

const duration = 3;

const NotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, duration * 1000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <Transition className={classes.NotFound} direction="up" distance={100}>
      <Typography variant='h1' className={classes.Title}>404</Typography>
      <Typography className={classes.Description}>Page not found.</Typography>
      <Box className={classes.Redirect}>
        Redirecting to homepage...
        <motion.div
          className={classes.ProgressBar}
          initial={{ width: 0 }}
          animate={{ width: '100%', transition: { duration } }}
        />
      </Box>
    </Transition>
  );
}

export default NotFound;