import React, { Component } from 'react';
import "../App.css";

export default class Beer extends Component {
  state = {liked: false};
  
  clicked = () => {
    this.setState({ liked: !this.state.liked });
    console.log('🌈', this.state.liked);
  };

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    let btnColor = this.state.liked ? "green" : "black";
    let btnText = this.state.liked ? "👍" : "like";
    return (
      <article>
        <img src={this.props.singleBeer.image_url} alt={this.props.singleBeer.name} />
        <div className="text">
          <h3>{this.props.singleBeer.name}</h3>
          <h6>{this.props.singleBeer.tagline}</h6>
          <div className='text'>
            <p>{this.props.singleBeer.description}</p>
          </div>
          <button className={btnColor} onClick={() => this.clicked()}>{btnText} </button>
        </div>
      </article>
    )
  }
}
