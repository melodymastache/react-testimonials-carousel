import './App.css';

function App() {
  return (
    <div className="App">
      <div className="carousel-container">
        <div className="item left">
          <img className="image" src="https://placedog.net/250/250" alt="dog3"></img>
          <h3 className="name">Spot</h3>
          <i className="position">Master of Hide and Seek</i>
          <p className="testimony">Woof. Woof woof woof woof woof. Woof woof! Woof.</p>
        </div>
        <div className="item active">
          <img className="image" src="https://placedog.net/250/250?random" alt="dog1"></img>
          <h3 className="name">Hammy</h3>
          <i className="position">Leader of Lunchtime</i>
          <p className="testimony">Woof woof woof woof woof woof woof. Woof woof woof. Woof woof woof woof! Woof.</p>
        </div>
        <div className="item right">
          <img alt="empty"></img>
          <h3 className="name">Mario</h3>
          <i className="position">Professional Hero</i>
          <p className="testimony">Woof woof woof woof woof woof woof woof. Woof Woof woof. Woof woof woof. Woof! </p>
        </div>
      </div>
    </div>
  );
}

export default App;
