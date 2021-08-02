import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />); // . O componente que queremos renderizar precisa de uma props para funcionar, portanto precisamos passar um valor para ela, que no caso é email={EMAIL_USER} . O teste verifica se, com a prop passada, o nosso teste passará.
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});
