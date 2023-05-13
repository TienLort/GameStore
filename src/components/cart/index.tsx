import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { enablePageScroll } from 'scroll-lock';
import { RiArrowRightLine } from 'react-icons/ri';
import { IGame } from '../../types/game';
import Transition from '../transition';
import CartItem from '../cart_item';
import CusButton from '../button';
import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';
interface Props {
    cartItems: IGame[],
    setIsCartOpen: (isCartOpen: boolean) => void,
    removeFromCart: (ids: number[]) => void,
}

const Cart = (props: Props) => {
    const classes = useStyles();
    const {
        cartItems,
        setIsCartOpen,
        removeFromCart,
    } = props;
    const clearCart = () => {
        removeFromCart(cartItems.map(item => item.id));
    };
    const closeCart = () => {
        setIsCartOpen(false);
        enablePageScroll();
    };
    let gamesCount;
    if (cartItems.length > 1) {
        gamesCount = `${cartItems.length} games`;
    } else if (cartItems.length === 1) {
        gamesCount = '1 game';
    } else {
        gamesCount = 'No games added';
    }
    const totalPrice = cartItems
        .reduce((acc, item) => acc + item.price, 0)
        .toFixed(2);

    return (
        <>
            <Transition className={classes.Background}>
                <Box className={classes.FullBox} onClick={closeCart} />
            </Transition>
            <motion.div
                className={classes.CartModal}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                    opacity: 0, x: '100%',
                    transition: { duration: 0.25 },
                }}
                transition={{
                    type: 'spring',
                    duration: 0.5,
                }}
            >
                <Box className={classes.CartHeader}>
                    <Typography className={classes.CartText} variant='h3'>{gamesCount}</Typography>
                    {cartItems.length > 0 && (
                        <CusButton handleClick={clearCart} className={classes.CartButton}>Clear</CusButton>
                    )}
                </Box>
                <Box className={classes.Items}>
                    <AnimatePresence>
                        {cartItems.map((game) => (
                            <CartItem
                                key={`cart-${game.id}`}
                                game={game}
                                closeCart={closeCart}
                                removeFromCart={removeFromCart} />
                        ))}
                    </AnimatePresence>
                </Box>
                <Box className={classes.Checkout}>
                    <Box className={classes.CheckoutBox}>Total: ${+totalPrice}</Box>
                    <CusButton className={classes.CheckoutButton}>Checkout <RiArrowRightLine /></CusButton>
                </Box>
            </motion.div>
        </>
    );
}

export default Cart;
