import axios from 'axios';
import { Platform } from 'react-native';

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;

const fakeGroupId = '591b9773d5b6d46d0a597ccf';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      throw e;
    }
  }

  async createGroupMeetups(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
}

export {
  MeetupApi,
};

class UserApi {
  constructor() {
    this.path = '/users';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/auth0`, args);
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const User = new UserApi();
