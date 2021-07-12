// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};
  
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// **********************************************************
describe('Testagem da função getUsername', () => {
  it('Testando se retorna o usuário Mark', async () => {
    expect.assertions(1)
    const data = await getUserName(4)
    expect(data).toEqual('Mark')
  })

  it('Testando erro quando o usuario não existe', async () => {
    expect.assertions(1)
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 1 + ' not found.' })
    }
  })
})
