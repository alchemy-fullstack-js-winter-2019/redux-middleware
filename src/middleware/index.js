import { logger } from '../logger';
import { thunk } from '../thunk';




export const middleware = [
  logger, 
  thunk
];
