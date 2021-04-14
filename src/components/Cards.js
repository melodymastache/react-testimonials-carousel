import React from 'react';
import './Carousel.css';
import { items } from './Data';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left-solid.svg';
import { ReactComponent as ArrowRight } from '../assets/chevron-right-solid.svg';
import { ReactComponent as Quote } from '../assets/quote.svg';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftCard: 0,
            activeIndex: 0,
            rightCard: 0
        };
        this.getPreviousSlide = this.getPreviousSlide.bind(this);
        this.getNextSlide = this.getNextSlide.bind(this);
    }
    componentDidMount() { // gets index of active card from imported data and sets state
        for (var i in items) {
            if (items[i].status === 'active') {
                let active = i;
                this.setState({ 
                    leftCard: --active, // not working = undefined
                    activeIndex: active,
                    rightCard: ++active // not working = undefined
                });
            }
        }
    }
    getPreviousSlide() { 

    }
    getNextSlide() {

    }
    render() {
        return (
            <div className="cards">
                <div className="card left">
                    <img className="avatars" src={items[this.state.leftCard].imgSrc} alt="avatar"></img>
                    <div className="text">
                        <h3 className="name">Spot {items[this.state.leftCard].name} </h3>
                        <i className="position">Hide and Seek Master</i>
                        <p className="testimony">{ }</p>
                    </div>
                </div>
                <div className="card active">
                    <img className="avatars" src={items[this.state.activeIndex].imgSrc} alt="avatar"></img>
                    <div className="text">
                        <Quote className="quotes quote-left" fill="hsla(221, 0%, 88%, 0.81)"></Quote>
                        <h3 className="name">Hammy</h3>
                        <i className="position">Lunchtime Leader</i>
                        <p className="testimony">Woof woof woof woof woof woof woof. Woof woof woof. Woof woof woof woof! Woof. Woof woof woof woof woof woof woof woof. Woof woof. Woof woof woof. Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof!</p>
                        <div className="arrow-container">
                            <ArrowLeft className="arrow arrow-left" fill="hsla(221, 0%, 49%, 0.98)" onClick={this.getPreviousSlide}></ArrowLeft>
                            <ArrowRight className="arrow arrow-right" fill="hsla(221, 0%, 49%, 0.98)" onClick={this.getNextSlide}></ArrowRight>
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