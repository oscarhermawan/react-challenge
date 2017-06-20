import React, { Component } from 'react';
import Content from './components/Content'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      heroes:[]
    }
  }

  componentDidMount(){
    axios.get('http://api.herostats.io/heroes/all')
    .then((hero)=>{
      const heroesArr = Object.keys(hero.data).map((key) => { return hero.data[key] });
      // console.log(heroesArr);
      this.setState({heroes:heroesArr})
    })
  }

  render() {
    return (
      <div className="App">
        <Content heroes={this.state.heroes}/>

      </div>
    );
  }
}

export default App;
