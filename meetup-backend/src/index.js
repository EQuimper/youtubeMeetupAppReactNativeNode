/* eslint-disable no-console */

import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { MeetupRoutes, GroupRoutes, UserRoutes } from './modules';

const app = express();

/**
* Database
*/
dbConfig();
/**
* Middlewares
*/
middlewaresConfig(app);

app.use('/api', [MeetupRoutes, GroupRoutes, UserRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
