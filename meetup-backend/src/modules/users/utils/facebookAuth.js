import axios from 'axios';

import { getUserInfo } from './getUserInfo';

export async function facebookAuth(token) {
  try {
    const { data } = await axios.get(
      `https://graph.facebook.com/me?fields=email,name,picture&access_token=${token}`,
    );
    return getUserInfo(data, 'facebook');
  } catch (e) {
    return e;
  }
}
