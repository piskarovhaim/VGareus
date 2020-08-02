import React from 'react';
import './GamesContainer.css'
import GameItem from './GameItem';
import Spinner from './Spinner'

function GamesContainer (props) {
    const { isLoaded , gameList } = props
    // maping the game list element or set 'no games'
    const GameList = gameList?.length > 0 ? gameList.map(game=> <GameItem key={game.name} game={game}/>) : 'No Games'
    return (
        <div id="GameContainer" className="bg-dark containorGames p-5 text-center">
            <h1 className="h1 text-white ">Featured Games</h1>
            {isLoaded ? <div className="row p-5">{GameList}</div> : <Spinner/>}
        </div>
    )
}
export default GamesContainer;