const validateTalk = (req, res, next) => {
  const { talk = {} } = req.body; // Desconstrói o talk do body
  const { watchedAt, rate } = talk; // Desconstrói o objeto talk

  if (watchedAt === undefined || rate === undefined) { 
    return res.status(400).json({ 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios', 
    }); 
  }

  next();
};

const validateSubTalk = (req, res, next) => {
  const { talk } = req.body; // Desconstrói o talk do body

  const dateRegex = /^[\d]{2}\/[\d]{2}\/[\d]{4}$/;
  if (talk.rate < 1 || talk.rate > 5) {
    return res.status(400).json({ 
      message: 'O campo "rate" deve ser um inteiro de 1 à 5', 
    }); 
  }

  if (!dateRegex.test(talk.watchedAt)) { 
    return res.status(400).json({ 
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"', 
    }); 
  }

  next();
};

module.exports = { validateTalk, validateSubTalk };