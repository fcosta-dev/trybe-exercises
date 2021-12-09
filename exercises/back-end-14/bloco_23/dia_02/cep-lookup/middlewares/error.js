module.exports = (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }
  // Verificamos se esse é um erro de domínio
  if (err.code) {
    const statusByErrorCode = {
      notFound: 404,
    }
    // Usamos o código do erro para determinar qual o status code adequado
    const status = statusByErrorCode[err.code] || 500;
    // Enviamos o status code e o erro como resposta
    res.status(status).json(err);
  }
  // Caso não seja um erro de domínio, enviamos uma resposta de erro desconhecido
  console.error(err);
  res.status(500).json({ error: { code: 'internal', message: 'Internal server error' } });
};
