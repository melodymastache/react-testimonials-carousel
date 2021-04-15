import React from 'react';
import './Carousel.css';
import { items } from './Data';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left-solid.svg';
import { ReactComponent as ArrowRight } from '../assets/chevron-right-solid.svg';
import { ReactComponent as Quote } from '../assets/quote.svg';

class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            leftCard: 0,
            activeIndex: 0,
            rightCard: 0,
            arrayLength: 0
        };
        this.getLength = this.getLength.bind(this);
        this.activatePreviousSlide = this.activatePreviousSlide.bind(this);
        this.activateNextSlide = this.activateNextSlide.bind(this);
    }
    componentDidMount() { // gets index of active card from imported data and sets state
        let length = this.getLength();
        for (var i = 0; i < length; i++) {
            if (items[i].status === 'active') {
                this.setState({
                    leftCard: i - 1,
                    activeIndex: i,
                    rightCard: i + 1,
                    arrayLength: length
                });
            }
        }
    }
    getLength() {
        let length = 0;
        // eslint-disable-next-line 
        for (var i in items) {
            length++;
        }
        return length;
    }
    activatePreviousSlide(currentActiveIndex) {
        let left = this.state.leftCard;
        let active = this.state.activeIndex;
        let right = this.state.rightCard;
        console.log('Left: ' + left + '\nActive: ' + active + '\nRight: ' + right);
        if (left - 1 === 0) { // if left card is first in array
            this.setState({
                leftCard: this.state.length - 1,
                activeIndex: active - 1,
                rightCard: right - 1
            })
        }
        else {
            this.setState({
                leftCard: currentActiveIndex - 2,
                activeIndex: currentActiveIndex - 1,
                rightCard: currentActiveIndex,
            }, () => { console.log(this.state); });
        }
    }
    activateNextSlide(currentActiveIndex) {
        // if (currentActiveIndex === endOfArray) {
        //     this.resetArray(); // undefined function
        // }
        // else {
        //     this.setState({
        //         leftCard: currentActiveIndex,
        //         activeIndex: ++currentActiveIndex,
        //         rightCard: ++currentActiveIndex
        //     });
        // }
    }
    render() {
        return (
            <div className="cards">
                <div className="card left">
                    <img className="avatars" src={items[this.state.leftCard].imgSrc} alt="avatar"></img>
                    <div className="text">
                        <h3 className="name">{items[this.state.leftCard].name} </h3>
                        <i className="position">{items[this.state.leftCard].position}</i>
                        <p className="testimony">{items[this.state.leftCard].quote}</p>
                    </div>
                </div>
                <div className="card active">
                    <img className="avatars" src={items[this.state.activeIndex].imgSrc} alt="avatar"></img>
                    <div className="text">
                        <Quote className="quotes quote-left" fill="hsla(221, 0%, 88%, 0.81)"></Quote>
                        <h3 className="name">{items[this.state.activeIndex].name}</h3>
                        <i className="position">{items[this.state.activeIndex].position}</i>
                        <p className="testimony">{items[this.state.activeIndex].quote}</p>
                        <div className="arrow-container">
                            <ArrowLeft className="arrow arrow-left" fill="hsla(221, 0%, 49%, 0.98)" onClick={this.activatePreviousSlide.bind(this, this.state.activeIndex)}></ArrowLeft>
                            <ArrowRight className="arrow arrow-right" fill="hsla(221, 0%, 49%, 0.98)" onClick={this.activateNextSlide.bind(this, this.state.activeIndex)}></ArrowRight>
                        </div>
                        <Quote className="quotes quote-right" fill="hsla(221, 0%, 88%, 0.81)"> </Quote>
                    </div>
                </div>
                <div className="card right">
                    <img className="avatars" src={items[this.state.rightCard].imgSrc} alt="avatar"></img>
                    <div className="text">
                        <h3 className="name">{items[this.state.rightCard].name}</h3>
                        <i className="position">{items[this.state.rightCard].position}</i>
                        <p className="testimony">{items[this.state.rightCard].quote}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;