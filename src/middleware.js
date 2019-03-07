import { logger } from './Logger';
import { thunk } from './Thunk';

export const middleware = [logger, thunk];
