import profileImage from '../modules/common/image/profile-image/profile-image.jpg';

export type ProfileType = {
  name: string;
  surname: string;
  profession: string;
  image: string;
};

type ActionType = { type: 'PROFILE/RETURN-PROFILE' };

const initialState: ProfileType = {
  name: 'I.',
  surname: 'Tjandra',
  profession: 'Speaking with Irma',
  image: profileImage,
};

export const profileReducers = (
  profile: ProfileType = initialState,
  action: ActionType
): ProfileType => {
  switch (action.type) {
    case 'PROFILE/RETURN-PROFILE':
      return profile;

    default:
      return profile;
  }
};
