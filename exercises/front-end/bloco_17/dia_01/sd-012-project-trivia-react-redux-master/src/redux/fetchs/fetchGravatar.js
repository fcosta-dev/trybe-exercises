import md5 from 'crypto-js/md5';
import { getGravatar } from '../actions';

const fetchGravatar = (hash) => {
  const fechamento = md5(hash.toLowerCase().trim()).toString();
  return (dispatch) => {
    fetch(`https://www.gravatar.com/avatar/${fechamento}`)
      .then((response) => response.json())
      .then((resolve) => dispatch(getGravatar(resolve)))
      .catch((err) => err);
  };
};

export default fetchGravatar;
