const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe(`Testando a chamada do callback de uma uppercase`, () => {
  it(`testando a chamada do callback`, done => {
    uppercase('teste', (str) => {
      expect(str).toBe('TESTE')
    })
    done();
  })
})