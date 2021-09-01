import md5 from 'crypto-js/md5';
import { actionGetGravatar } from '../actions/index';

const fetchGravatar = (hash) => {
  const fechamento = md5(hash.toLowerCase().trim()).toString();

  return (dispatch) => {
    fetch(`https://www.gravatar.com/avatar/${fechamento}`)
      .then((response) => response.json())
      .then((resolve) => dispatch(actionGetGravatar(resolve)))
      .catch((err) => err);
  };
};

export default fetchGravatar;
