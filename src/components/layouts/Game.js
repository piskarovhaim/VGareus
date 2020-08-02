import React, { Fragment } from 'react';
import './Game.css';
import PayWith from './PayWith';

 const Game = props => {

    const { name , desc , img } = props.game

    const style = {
        backgroundColor: '#F2EDED',
        marginTop: '-1rem',
        paddingTop: '2rem',
        paddingBottom: '2rem'
    };
    return (
        <Fragment>
            <div style={style}>
                <div className="container topBox">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4">
                            <img src={img} alt="" className='align-middle img-fluid'/>
                        </div>
                        <div id="module" className="col-sm-12 col-md-6 col-lg-7 col-xl-8 text-right">
                            <h1 className="headline h1">{name}</h1>
                            <p className="collapse descrip" id="collapseExample" dir="rtl" aria-expanded="false">
                                {desc}
                            </p>
                            <a role="button" dir="rtl" className="descrip text-secondary collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                <section id="boxes" className="py-5">
                    <div className="container">
                        <h3 className="h3 text-center descrip" dir='rtl'>קנה בעזרת:</h3>
                    <div className="row">
                        <PayWith title="PayPal" icon="fab fa-cc-paypal"/>
                        <PayWith title="Credit Card" icon="far fa-credit-card"/>
                        <PayWith title="BitCoin" icon="fab fa-bitcoin"/>
                    </div>
                    </div>
                </section>
                </div>
            </div>
            <div className="bg-light"></div>
        </Fragment>
    )
}

export default Game;