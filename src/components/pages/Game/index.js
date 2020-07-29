import React, { Component } from "react";
import GameLayout from '../../layouts/Game';
import Spinner from '../../layouts/Spinner';
import firebase from "FirebaseDB";

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            isLoaded:false,
            game: {},
            error:false            
        }
    }

    componentDidMount() {
        const {name} = this.props?.match?.params || ''
        let currentComponent = this;
        currentComponent.setState({isLoaded:false,error:false})
        const docRef = firebase.firestore().collection("GameList").doc(name);
        // get game data from firebase
        docRef.get().then(function(doc) {
            if (doc.exists) {
                currentComponent.setState({game:doc.data(),isLoaded:true})
            } else {
                currentComponent.setState({error:"No such Game!"})
            }
        }).catch(function(error) {
            currentComponent.setState({error:"Internal Error"})
            console.log("Error getting document:", error);
        });
      }
      
    render() {
        const { game , isLoaded , error} = this.state
        if(error)
            return (<h1>{error}</h1>)

        return(
            <span>
                {isLoaded ? <GameLayout game={game} isLoaded={isLoaded}/> : <Spinner/>}
            </span>
        )
      } 
}

export default Game;
      