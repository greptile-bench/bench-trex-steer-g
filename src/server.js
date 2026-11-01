import http from 'node:http'

http
  .createServer((_, res) => res.end('ok'))
  .listen(Number(process.env.PORT ?? 3000))
