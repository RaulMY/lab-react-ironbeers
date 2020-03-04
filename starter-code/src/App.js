import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import BeerComplete from './components/BeerComplete';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" render={props=> {
            return <Fragment>
              <Header/>
              <AllBeers {...props} />
            </Fragment>
          }}/>
          <Route exact path="/new-beer" render={props=> {
            return <Fragment>
              <Header/>
              <NewBeer {...props} />
            </Fragment>
          }}/>
          <Route exact path="/random-beer" render={props=> {
            return <Fragment>
              <Header/>
              <RandomBeer {...props} />
            </Fragment>
          }}/>
          <Route exact path="/beers/:id" render={props=> {
            return <Fragment>
              <Header/>
              <BeerComplete {...props} random={false}/>
            </Fragment>
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
