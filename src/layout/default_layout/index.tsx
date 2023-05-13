import React, { useCallback, useState } from 'react';
import { Box, Divider } from '@mui/material';
import ErrorBoundary from 'src/components/error_boundaries';
import Header from 'src/components/header';
// import { CPath, CRouteList } from 'src/constants';
import { useStyles } from './styles';
import Footer from 'src/components/footer';
import { IGame } from 'src/types/game';
import { AnimatePresence } from 'framer-motion';
import Cart from 'src/components/cart';

interface IProps {
  children: JSX.Element;
}

const DefaultLayout = (props: IProps) => {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState<IGame[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const removeFromCart = useCallback((ids: number[]) => {
    setCartItems(cartItems.filter((item) => !ids.includes(item.id)));
  }, [cartItems]);
  // React.useEffect(() => {
  //   if (boxRef.current && boxRef.current.clientHeight) {
  //     const height = boxRef.current.clientHeight;
  //     window.addEventListener('scroll', () => {
  //       const scrollTop = window.scrollY;
  //       scrollTop >= height ? setIsSticky(true) : setIsSticky(false);
  //     });
  //   }
  //   return () => {
  //     window.removeEventListener('scroll', () => {
  //       console.log('Remove');
  //     });
  //   };
  // }, []);

  return (
    <ErrorBoundary>
      <Box className={classes.root}>
        <Header cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
        <AnimatePresence mode="wait" initial={false}>
          <div style={{
            height: '137px',
          }}>

          </div>
          {props.children}
        </AnimatePresence>
      </Box>
    </ErrorBoundary >
  );
};

export default DefaultLayout;
