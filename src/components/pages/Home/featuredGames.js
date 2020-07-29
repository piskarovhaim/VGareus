import React, { Component } from "react";
import firebase from "FirebaseDB";
import GamesContainer from '../../layouts/GamesContainer'

class FeaturedGames extends Component {

    constructor(props) {
      super(props);
  
      this.state = 
      {
        isLoaded:false,
        gameList:[],             
      }
    }

    componentDidMount() {
        
        let currentComponent = this;
        currentComponent.setState({isLoaded:false})
        firebase.firestore().collection("GameList").get()   // read from the database all the games
          .then(res => {
                let tempArr = []
                res.forEach(doc => tempArr.push(doc.data()));
                currentComponent.setState({isLoaded:true,gameList:tempArr})
          })
          .catch(function(error) {
                console.log("Error getting documents: ", error);
                currentComponent.setState({isLoaded:true})
          });
      }

    
    render() {
        const { isLoaded , gameList } = this.state
        return(
            <GamesContainer isLoaded={isLoaded} gameList={gameList}/>
        )
      } 
}

export default FeaturedGames;
      