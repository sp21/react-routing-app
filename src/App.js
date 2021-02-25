import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Card from './components/Card';
import EditEmployee from './components/EditEmployee';


class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" render={() => ( <Redirect to="/card"/> )} />
            <Route path="/card" component={Card} />
            <Route path="/edit/:id" component={EditEmployee} />
          </Switch>
      </div>
    );
  }
}

export default App;