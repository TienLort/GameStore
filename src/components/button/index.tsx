import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './styles';
import classnames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CusButton = (props: Props) => {
  const classes = useStyles();
  const { children, className = '', type = 'button', title, handleClick } = props;

  return (
    <motion.button
      className={classnames(classes.CusButton, className)}
      type={type}
      title={title}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
};

export default CusButton;
