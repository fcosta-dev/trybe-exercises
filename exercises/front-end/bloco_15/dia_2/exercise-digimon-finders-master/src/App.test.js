import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });
});
