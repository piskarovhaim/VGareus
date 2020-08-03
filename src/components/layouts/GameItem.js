import React, { Component } from "react";
import './GameItem.css';
import $ from "jquery";

class GameItem extends Component {

    constructor(props) {
      super(props);

    }

    componentDidMount() {
        const { game } = this.props
        $(this.refs.selectBtn).click(function() {
            window.location.href = `/Game/${game.id}`;
            return false;
        });
      }

    render() {
        const { game } = this.props
        if(!game) return (<span></span>)
    
        const { name , img  } = game
        return(
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-2'>
                <div className="hovereffect">
                    <img className="img-responsive" src={img} alt=""/>
                        <div className="overlay">
                            <h2 className="h2">{name}</h2>
                            <button ref='selectBtn' className="buttunText mt-5 btn-lg btn-outline-light">לרכישה</button>
                        </div>
                    </div>
                </div>
                )
      } 
}
export default GameItem;