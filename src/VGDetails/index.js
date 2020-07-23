import React, { Component } from "react";


class Game extends Component {

    constructor(props) {
      super(props);
        console.log(this.props,'this.props')
      this.state = 
      {
        name: '' ,
        desc: '',
        img: '',             
      }
    }
    render() {
        return(
            <h1>test gane page</h1>
        )
      } 
}

export default Game;
      