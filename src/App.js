import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';


import store from './store/configureStore'


import { Navbar, Content, ContentDetail } from './components'

class App extends React.Component {
  constructor(){
    super()

  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar /><br />
            <Switch>
              <Route exact path="/heroes" component={Content} />
              <Route path="/heroes/:id" component={ContentDetail} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
