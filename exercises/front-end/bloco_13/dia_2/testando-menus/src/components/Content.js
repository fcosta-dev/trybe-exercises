import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Cadastro from '../pages/menu_superior/Cadastro'
import Financeiro from '../pages/menu_superior/Financeiro'
import Relatorio from '../pages/menu_superior/Relatorio'

class Content extends Component {
  constructor() {
    super();

    this.state = {
      cadastro: [
        {id: 'estados', name: 'Estados'},
        {id: 'cidades', name: 'Cidades'},
        {id: 'step1', name: '-'},
        {id: 'clifor', name: 'Cliente/Fornecedor'},
      ],
      financeiro: [
        {id: 'lancamento', name: 'Lançamento'},
        {id: 'baixa', name: 'Baixa'},
        {id: 'step1', name: '-'},
      ],
      relatorio: [
        {id: 'rel_estados', name: 'Estados'},
        {id: 'rel_cidades', name: 'Cidades'},
        {id: 'rel_step1', name: '-'},
        {id: 'rel_clifor', name: 'Cliente/Fornecedor'},
        {id: 'rel_step2', name: '-'},
        {id: 'rel_lanc_financeiro', name: 'Lançamentos Financeiros'},
        {id: 'rel_bx_financeiro', name: 'Baixas Financeiras'},
      ]
    }
  }

  render() {
    const { cadastro, financeiro, relatorio } = this.state;

    return (
      <main className="Content">
        <Switch>
          <Route exact path="/cadastro"
            render={ (routerProps) => (
              <Cadastro {...routerProps } cadastro={ cadastro } />
            )}
          />
          <Route exact path="/financeiro"
            render={ (routerProps) => (
              <Financeiro {...routerProps } financeiro={ financeiro } />
            )}
          />
          <Route exact path="/relatorio"
            render={ (routerProps) => (
              <Relatorio {...routerProps } relatorio={ relatorio } />
            )}
          />
        </Switch>
      </main>
    )
  }
}

export default Content;
