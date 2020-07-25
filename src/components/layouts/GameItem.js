import React from 'react';
import {Link} from 'react-router-dom';
import './GameItem.css';

export const GameItem = props => {
    const { game } = props || false
    if(!game) return 

    const {name,desc,img} = game
    return (
        <div className='box col-lg-4 col-md-4 col-sm-12 col-xs-12 imghov'>
            <img src={img} alt="" className='img-fluid mt-4'/>
            <div className="overlay ctr">
                <h2 className="h2 text-white mt-3">{name}</h2>
                <Link to={`/Game/${name}`}><button className="mt-5 btn-lg btn-outline-light">Purchase</button></Link>
            </div>
        </div>
    )
}
