import React, { Fragment } from 'react';
import picture from '../assets/images/sample.jpg';
import './Game.css';

 const Game = props => {

    const { name , desc , img } = props.game

    const style = {
        backgroundColor: '#F2EDED',
        marginTop: '-1rem',
        height: '80vh',
        paddingTop: '2rem'
    };
    return (
        <Fragment>
        <div style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-5 col-xl-4">
                        <img src={img} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-7 col-xl-8">
                        <h1 className="h1">{name}</h1>
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-light"></div>
        </Fragment>
    )
}

export default Game;