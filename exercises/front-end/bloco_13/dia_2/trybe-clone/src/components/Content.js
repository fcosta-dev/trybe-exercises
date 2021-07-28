import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solution from '../pages/Solution';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      solutions: [
        { id: 'componentes-react', name: 'Componentes React' },
        { id: 'rotas-react', name: 'Rotas React' },
      ],
    };
  }

  render() {
    const { solutions } = this.state;

    return (
      <main className="Content">
        <Switch> {/* Funciona como um switch do JS, são opções de rotas conforme for clicado, vai ser renderizado */}
          <Route path="/calendar" component={ Calendar } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route
            exact
            path="/solutions"
            render={ (routerProps) => (<Solutions
              { ...routerProps }
              solutions={ solutions }
            />) }
          />
          <Route path="/solutions/:solutionId" component={ Solution } />
        </Switch>
      </main>
    );
  }
}

export default Content;
