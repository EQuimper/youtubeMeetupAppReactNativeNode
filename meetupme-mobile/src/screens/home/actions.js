import { MeetupApi } from '../../../constants/api';

const meetupApi = new MeetupApi();

export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';

export const fetchMyMeetups = () => ({
  type: FETCH_MY_MEETUPS,
  payload: meetupApi.fetchGroupMeetups(),
});
