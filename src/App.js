import React from "react";
import Beer from "./components/Beer";


const URL = 'https://api.punkapi.com/v2/beers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  async componentDidMount() {
    console.log('mounted 🌵', this.state.beers);
    const res = await fetch(URL);
    const data = await res.json();
    this.setState({
      beers: data,
    });
  }

  componentDidUpdate() {
    console.log('updated ☀️', this.state.beers);
  }

  render() {
    return <div className='grid'>
      {this.state.beers.map((beer) => {
        return <Beer singleBeer={beer} />
      })}
    </div>;
  }
}

export default App;