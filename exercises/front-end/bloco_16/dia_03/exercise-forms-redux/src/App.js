import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importa as pages para criação das Routes
import PersonalForms from './pages/PersonalForms';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ PersonalForms } />
          <Route path="/professionalform" component={ ProfessionalForm } />
          <Route path="/formdisplay" component={ FormDataDisplay } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
