import React, { Component } from "react";
import Games from './games'
import { Redirect } from "react-router";
import { Link } from 'react-router-dom'
import firebase from "../Firebase/FireBase.js";

class HomePage extends Component {

    constructor(props) {
      super(props);
  
      this.state = 
      {
        gameList:['game1,game2'],             
      }
    }

    componentDidMount() {
        // read from the database all the games
        let ref = firebase.database().ref("/GameList");
        ref.on("value", snapshot => {
            console.log(snapshot,'child.val()')
          let arrTemp = []; // array temp for ths categories list
          snapshot.forEach(child => {
                console.log(child.val(),'child.val()')
                arrTemp.push(child.val());
          });
          this.setState({ gameList: arrTemp });
        });
      }

    
    render() {
        return(
            <Games/>
        )
      } 
}

export default HomePage;
      