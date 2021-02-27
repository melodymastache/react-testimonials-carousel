import './App.css';
import arrowLeft from './assets/chevron-left-solid.svg';
import arrowRight from './assets/chevron-right-solid.svg';
// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

function App() {
  return (
    <div className="App">
      <div className="carousel-container">
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
            <img src={arrowLeft} alt='arrow-left' className="arrow-left"></img>
            <h3 className="name">Hammy</h3>
            <i className="position">Lunchtime Leader</i>
            <p className="testimony">Woof woof woof woof woof woof woof. Woof woof woof. Woof woof woof woof! Woof. Woof woof woof woof woof woof woof woof. Woof woof. Woof woof woof. Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof!</p>
            <img src={arrowRight} alt="arrow-right" className="arrow-right"></img>
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
    </div>
  );
}

export default App;
