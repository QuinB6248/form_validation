import React, { Component } from 'react'
import store from './store'
import {Provider} from 'react-redux'
import FormContainer from './components/FormContainer'
import Info from './components/Info'
import { Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      //The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
      <Provider store={store}>
        <div>
          <Route exact path="/" component={FormContainer} />
          <Route exact path="/info" component={Info} />
        </div>
      </Provider>
    );
  }
}

export default App;