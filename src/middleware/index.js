import { thunk } from '../middleware/thunk';
import { logger } from '../middleware/logger';





export const middleware = [
  logger, 
  thunk
];
