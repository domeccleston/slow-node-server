import { createServer } from 'http';

const timeout = 11000

createServer(async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, timeout));
  res.write(`Sending a response after $${timeout / 1000} seconds.`);
  res.end();
}).listen(process.env.PORT);
