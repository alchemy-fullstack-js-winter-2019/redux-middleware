import { logger } from './logger';
import { thunk } from './thunk';
import { promiseMiddleware } from './promise';

export const middleware = [
  logger,
  thunk,
  promiseMiddleware
];
