import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import { Navbar, Content, ContentDetail } from './components'

class App extends React.Component {
  constructor(){
    super()

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar /><br />
          <Switch>
            <Route exact path="/heroes" component={Content} />
            <Route path="/heroes/:id" component={ContentDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
