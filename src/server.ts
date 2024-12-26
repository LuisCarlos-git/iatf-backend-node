import Fastify from 'fastify';

const app = Fastify();

app.listen({
  port: 3000,
});

app.get('/ping', (req, res) => {
  return res.code(200).send({ message: 'Hello, World!' });
});
