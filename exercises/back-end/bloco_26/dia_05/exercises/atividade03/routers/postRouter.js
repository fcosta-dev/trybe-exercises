const router = require('express').Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

router.get('/', (_req, res) => res.status(200).json({ posts }))

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((item) => item.id === parseint(id))

  if (!post) {
    return next({ statusCode: 404, message: 'post not found' });
  }

  res.status(200).json(post)
})

module.exports = {
  router
}
