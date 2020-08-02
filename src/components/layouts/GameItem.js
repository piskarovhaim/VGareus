import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './GameItem.css';
import $ from "jquery";

class GameItem extends Component {

    constructor(props) {
      super(props);
  
    }

    componentDidMount() {
        $('button').click(function () {
            //$(location).attr('href','http://abcd.com'+temp);
          });
      }


    render() {
        const { game } = this.props
        if(!game) return (<span></span>)
    
        const { name , img } = game
        return(
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-2'>
                <div className="hovereffect">
                    <img className="img-responsive" src={img} alt=""/>
                        <div className="overlay">
                            <h2 className="h2">{name}</h2>
                            <Link to={`/Game/${name}`}><button className="buttunText mt-5 btn-lg btn-outline-light">לרכישה</button></Link>
                        </div>
                    </div>
                </div>
                )
      } 
}
export default GameItem;