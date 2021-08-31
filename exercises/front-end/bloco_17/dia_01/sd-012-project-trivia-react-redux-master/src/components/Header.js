import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import fetchGravatar from '../redux/fetchs/fetchGravatar';
import { saveImgUrl } from '../redux/actions';

class Header extends React.Component {
  render() {
    const { email, playerName, saveImg } = this.props;
    const hash = md5(email.toLowerCase().trim()).toString();
    const IMG_URL = `https://www.gravatar.com/avatar/${hash}`;
    saveImg(IMG_URL);
    const { player: { score } } = JSON.parse(localStorage.getItem('state'));
    return (
      <header>
        <img src={ IMG_URL } alt="" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{ playerName }</p>
        <p data-testid="header-score">{+score}</p>
      </header>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  pushFetch: (state) => dispatch(fetchGravatar(state)),
  saveImg: (url) => dispatch(saveImgUrl(url)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  playerName: state.user.playerName,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  saveImg: PropTypes.func.isRequired,
  playerName: PropTypes.string.isRequired,
};
