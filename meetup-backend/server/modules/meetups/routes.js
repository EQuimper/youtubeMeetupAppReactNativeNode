import { Router } from 'express';
import * as MeetupController from './controller';

const routes = new Router();

routes.post('/meetups', MeetupController.createMeetup);
routes.get('/meetups', MeetupController.getAllMeetups);

export default routes;
