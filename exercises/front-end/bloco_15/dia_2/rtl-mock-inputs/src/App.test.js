import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

afterEach(() => jest.clearAllMocks());
it('fetch joke', async () => {
  // A constante joke cria um objeto similar ao que é retornado da API ;
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // O jest.spyon espiona as chamadas a função fetch do objeto global , é por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo a função parseInt ;
  jest.spyOn(global, "fetch")
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    {"headers": {"Accept": "application/json"}}
  );
});
