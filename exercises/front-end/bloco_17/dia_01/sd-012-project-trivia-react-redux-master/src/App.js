import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login, Game, Settings, Ranking, FeedBack } from './pages/index';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ FeedBack } />
        <Route path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
