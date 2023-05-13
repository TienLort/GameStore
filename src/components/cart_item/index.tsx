import React from 'react'
import { useNavigate } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import Transition from '../transition';
import CusButton from '../button';
import { IGame } from '../../types/game';
import { useStyles } from './styles';
interface Props {
    game: IGame,
    closeCart: () => void,
    removeFromCart: (ids: number[]) => void,
}

const CartItem = (props: Props) => {
    const classes = useStyles();
    const { game, closeCart, removeFromCart } = props;
    const { id, name, price } = game;
    const navigate = useNavigate();
    const navigateToGame = () => {
        navigate(`/games/${id}`);
        closeCart();
    };
    const removeItem = () => removeFromCart([id]);

    return (
        <Transition
            key={`cart-${id}`}
            layout
            className={classes.Item}
            direction="right"
            durationOut={0.15}
        >
            <CusButton handleClick={navigateToGame} className={classes.ItemButton}>
                {name}
            </CusButton>
            ${price}
            <CusButton
                className={classes.ItemButtonRemove}
                title="Remove"
                handleClick={removeItem}
            >
                <RiCloseLine />
            </CusButton>
        </Transition>
    );
}

export default CartItem;
