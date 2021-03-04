import React from 'react';
import './Carousel.css';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left-solid.svg';
import { ReactComponent as ArrowRight } from '../assets/chevron-right-solid.svg';
import { ReactComponent as Quote } from '../assets/quote.svg';

class Cards extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="card left">
                    <img className="avatars" src="https://placedog.net/250/250" alt="avatar"></img>
                    <div className="text">
                        <h3 className="name">Spot</h3>
                        <i className="position">Hide and Seek Master</i>
                        <p className="testimony">Woof. Woof woof woof woof woof. Woof woof! Woof. Woof. Woof woof woof woof woof. Woof woof! Woof. Woof. Woof woof woof woof woof. Woof woof! Woof.</p>
                    </div>
                </div>
                <div className="card active">
                    <img className="avatars" src="https://placedog.net/350/350" alt="avatar"></img>
                    <div className="text">
                        <Quote className="quotes quote-left" fill="hsla(221, 0%, 88%, 0.81)"></Quote>
                        <h3 className="name">Hammy</h3>
                        <i className="position">Lunchtime Leader</i>
                        <p className="testimony">Woof woof woof woof woof woof woof. Woof woof woof. Woof woof woof woof! Woof. Woof woof woof woof woof woof woof woof. Woof woof. Woof woof woof. Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof!</p>

                        <div class="arrow-container">
                            <ArrowLeft className="arrow arrow-left" fill="hsla(221, 0%, 49%, 0.98)"></ArrowLeft>
                            <ArrowRight className="arrow arrow-right" fill="hsla(221, 0%, 49%, 0.98)"></ArrowRight>
                        </div>
                        <Quote className="quotes quote-right" fill="hsla(221, 0%, 88%, 0.81)"> </Quote>
                    </div>
                </div>
                <div className="card right">
                    <img className="avatars" src="https://placedog.net/300/300" alt="avatar"></img>
                    <div className="text">
                        <h3 className="name">Mario</h3>
                        <i className="position">Professional Hero</i>
                        <p className="testimony">Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;