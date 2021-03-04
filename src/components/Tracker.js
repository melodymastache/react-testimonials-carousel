import React from 'react';
import './Carousel.css';
import { ReactComponent as Circle } from '../assets/circle-solid.svg';

class Tracker extends React.Component {
    render() {
        return (
            <div className="tracker">
                <Circle fill="hsla(221, 0%, 49%, 0.98)"></Circle>
                <Circle fill="hsla(221, 0%, 88%, 0.81)"></Circle>
                <Circle fill="hsla(221, 0%, 88%, 0.81)"></Circle>
            </div>
        )
    }
}

export default Tracker;