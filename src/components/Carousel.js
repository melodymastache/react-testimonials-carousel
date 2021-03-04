import React from 'react';
import Cards from './Cards';
import Tracker from './Tracker';

class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel-container">
                <Cards></Cards>
                <Tracker></Tracker>
            </div>
        )
    }
}

export default Carousel;