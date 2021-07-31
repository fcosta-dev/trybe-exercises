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
      solutions: [ // Um array solutions com dois objetos
        { id: 'componentes-react', name: '13.1 - Componentes React' },
        { id: 'rotas-react', name: '13.2 - Rotas React' },
      ],
    };
  }

  render() {
    const { solutions } = this.state;

    return (
      <main className="Content">
        <Switch> {/* Funciona como um switch do JS, são opções de rotas conforme for clicado, vai ser renderizado */}
          <Route path="/calendar" component={ Calendar } /> {/* Quando a rota for /calendar então renderizo o componente Calendar */}
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route
            exact
            path="/solutions"
            // Render e component é a mesma coisa, porém quando é necessário passar props precisa ser usado o render, como abaixo
            // O routerProps são props internas do ReactRouter(match, history, location), e no termo abaixo eu recebo essas props, e na linha 36 eu passo a props para o componente
            render={ (routerProps) => ( // O render é passado como callback porque eu quero receber as props do ReactRouter(match, path, history) e passa-las para dentro do componente Solutions como { ...routerProps }
              <Solutions { ...routerProps } solutions={ solutions } />
            ) }
          />
          <Route path="/solutions/:solutionId" component={ Solution } /> {/* Os : indica que é variável ou seja é a sintaxe de variável no React, e o { Solution } é da state */}
        </Switch>
      </main>
    );
  }
}

export default Content;
