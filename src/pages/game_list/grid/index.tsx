import React, { memo } from 'react';
import { IGame } from 'src/types/game';
import Transition from '../../../components/transition';
import GameCard from '../game_card';

interface Props {
    games: IGame[],
    cartItems: IGame[];
    addToCart: (game: IGame) => void;
    columnsCount: number;
}

const Grid = ({ games, cartItems, addToCart, columnsCount }: Props) => {
    const gamesPerColumn = Math.ceil(games.length / columnsCount);
    const columns = Array(columnsCount).fill(null).map((_, index) => {
        const gamesToDisplay = [];
        for (let i = 0; i < gamesPerColumn; i++) {
            const gameIndex = i * columnsCount + index;
            if (gameIndex < games.length) {
                gamesToDisplay.push(games[gameIndex]);
            }
        }
        console.log(gamesToDisplay);
        return gamesToDisplay;
    });

    return (
        <Transition className="Grid">
            <>
                {columns.map((column, index) => (
                    <div key={`column-${index}`} className="Column">
                        {column.map((game) => (

                            <GameCard
                                key={game.id}
                                game={game}
                                cartItems={cartItems}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                ))}
            </>
        </Transition>
    );
}

export default memo(Grid);
