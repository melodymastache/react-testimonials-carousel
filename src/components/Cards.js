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
            left: [],
            active: [],
            right: []
        };
        this.getPreviousSlide = this.getPreviousSlide.bind(this);
        this.getNextSlide = this.getNextSlide.bind(this);
    }
    componentDidMount() {
        const arrSize = items.length;
        for (var i in arrSize) {
            switch (items[i].status) {
                case 'active':
                    this.setState({ active: items[i] });
                    console.log(items[i]);
                    break;
                case 'left':
                    this.setState({ left: items[i] });
                    break;
                case 'right':
                    this.setState({ right: items[i] });
                    break;
                default:
                    break;
            }
        }
        // console.log(this.state);
        // fetch("https://quiet-wave-16481.herokuapp.com/employees")
        //     .then(res => res.json())
        //     .then(data => this.setState({ employees: data }));
    }
    getPreviousSlide() { // dont forget to explain code !!!! //

    }
    getNextSlide() {

    }
    render() {
        return (
            <div className="cards">
                <div className="card left">
                    <img className="avatars" src="https://placedog.net/250/250" alt="avatar"></img>
                    <div className="text">
                        <h3 className="name">Spot</h3>
                        <i className="position">Hide and Seek Master</i>
                        <p className="testimony">{ }</p>
                    </div>
                </div>
                <div className="card active">
                    <img className="avatars" src="https://placedog.net/350/350" alt="avatar"></img>
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