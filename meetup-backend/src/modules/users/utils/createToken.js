import jwt from 'jsonwebtoken';

import config from '../../../config/config';

export const createToken = args =>
  jwt.sign({ id: args._id }, config.JWT_SECRET);
