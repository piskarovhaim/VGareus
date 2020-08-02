import React from 'react';
import './Promo.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Promo = () => {
    return (
        <div className="mainDiv">
                <div className="d-none bg-big d-md-inline-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mt-5 d-none d-md-block text-center" alt="home">
                                <img className="logoCont mt-5 pt-5"
                                    src="https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-medium-dark-logo.svg">
                                </img>
                                <h6 className="h6">For PlayStation® 4, Xbox One, and Origin on PC.</h6>
                                <button type="button" href='#GamesContainer' className="align-middle btn btn-outline-dark">More Games</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-sm d-md-none d-nline-block text-center">
                <div className="container">
                    <AnchorLink href='#GameContainer'>
                        <button type="button" className="btnSm align-middle btn-lg btn-dark">More Games</button>
                    </AnchorLink>
                </div>
                  
                </div>
        </div>
    )
}

export default Promo;
