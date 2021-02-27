import React from 'react';
import './Carousel.css';
import arrowLeft from '../assets/chevron-left-solid.svg';
import arrowRight from '../assets/chevron-right-solid.svg';
import circle from '../assets/circle-solid.svg';

class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel-container">
                <div className="cards">
                    <div className="card left">
                        <img src="https://placedog.net/250/250" alt="avatar"></img>
                        <div className="text">
                            <h3 className="name">Spot</h3>
                            <i className="position">Hide and Seek Master</i>
                            <p className="testimony">Woof. Woof woof woof woof woof. Woof woof! Woof. Woof. Woof woof woof woof woof. Woof woof! Woof. Woof. Woof woof woof woof woof. Woof woof! Woof.</p>
                        </div>
                    </div>
                    <div className="card active">
                        <img src="https://placedog.net/250/250?random" alt="avatar"></img>
                        <div className="text">
                            <h3 className="name">Hammy</h3>
                            <i className="position">Lunchtime Leader</i>
                            <p className="testimony">Woof woof woof woof woof woof woof. Woof woof woof. Woof woof woof woof! Woof. Woof woof woof woof woof woof woof woof. Woof woof. Woof woof woof. Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof!</p>
                            <div class="arrow-container">
                                <img src={arrowLeft} alt='arrow-left' className="arrow arrow-left"></img>
                                <img src={arrowRight} alt="arrow-right" className="arrow arrow-right"></img>
                            </div>
                        </div>
                    </div>
                    <div className="card right">
                        <img src="https://placedog.net/300/300?random" alt="avatar"></img>
                        <div className="text">
                            <h3 className="name">Mario</h3>
                            <i className="position">Professional Hero</i>
                            <p className="testimony">Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof!</p>
                        </div>
                    </div>
                </div>
                <div className="tracker">
                    <img src={circle} alt="circle"></img>
                    <img src={circle} alt="circle"></img>
                    <img src={circle} alt="circle"></img>
                </div>
            </div>
        )
    }
}

export default Carousel;