import { thunk } from '../middleware/thunk';
import { logger } from '../middleware/logger';
import { promiseMiddleware } from './promise';
 




export const middleware = [
  logger, 
  thunk,
  promiseMiddleware
];
