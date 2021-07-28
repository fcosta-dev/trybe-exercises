import React from 'react';
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
  render() {
    // eslint-disable-next-line
    const { solutions } = this.props; //Recebemos a props do Content.js

    return (
      <div>
        <h2>Gabaritos</h2>
        <ul>
          { solutions.map((solution) => (
            <li key={ solution.id }> {/* Como é feito um map, precisa ser montado as keys */}
              <Link to={ `/solutions/${solution.id}` }>{ solution.name }</Link> {/* Vai renderizar conforme o state da Content */}
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default Solutions;
