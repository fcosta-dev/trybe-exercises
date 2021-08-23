export const SET_PERSONAL_VALUE = 'SET_PERSONAL_VALUE';
export const SET_PROFESSIONAL_VALUE = 'SET_PROFESSIONAL_VALUE';

export const setPersonalValue = (payload) => (
  {
    type: SET_PERSONAL_VALUE, payload,
  });

export const setProfessionalValue = (payload) => (
  {
    type: SET_PROFESSIONAL_VALUE, payload,
  });
