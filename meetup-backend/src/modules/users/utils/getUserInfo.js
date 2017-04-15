export function getUserInfo(data, provider) {
  let fullName;
  let avatar;

  if (provider === 'google') {
    fullName = `${data.give_name} ${data.family_name}`;
    avatar = data.picture;
  } else {
    fullName = data.name;
    avatar = data.picture.data.url;
  }

  return {
    fullName,
    avatar,
    email: data.email,
    providerData: {
      uid: data.id,
      provider,
    },
  };
}
