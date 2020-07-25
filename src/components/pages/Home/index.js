import React, { Fragment } from 'react'
import Promo from '../../layouts/Promo';
import FeaturedGames from './featuredGames'

const Home = () => {
    return (
        <Fragment>
            <Promo/>
            <FeaturedGames/>
        </Fragment>
    )
}

export default Home;
