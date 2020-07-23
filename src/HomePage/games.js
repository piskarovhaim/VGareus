import React, { Component } from "react";


function gameElement (data) {
    return <h1>{data}</h1>
} 

class Games extends Component {

    constructor(props) {
      super(props);
  
      this.state = 
      {
        gameList:['game1,game2'],             
      }
    }


    render() {
        return(
            <div>
                {this.state.gameList.map(game=>gameElement(game))}
            </div>
        )
      } 
}

export default Games;
      