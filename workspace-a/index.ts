import express, { Express } from 'express';

export const app: Express = express();

app.get('/', (_req, res) => {
  res.send('june')
})

export const add = (a: number, b: number) => a + b;