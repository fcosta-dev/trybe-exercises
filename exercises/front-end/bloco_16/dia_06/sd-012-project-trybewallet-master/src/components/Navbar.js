import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { logout } from '../../actions/authActions';

class Navbar extends Component {
  // const name = 'F';
  // const email = 'a@a.com.br';

  liRender() {
    return (
      <li className="user-footer">
        <div className="pull-right">
          <a
            href="/"
            className="btn btn-default btn-flat"
          >
            Sair
          </a>
        </div>
      </li>
    );
  }

  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li
          onMouseLeave={ (e) => console.log(e) }
          className="dropdown user user-menu"
        >
          <a
            href="#/"
            onClick={ (e) => console.log(e) }
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            <img
              src="http://lorempixel.com/160/160/abstract"
              className="user-image"
              alt="User"
            />
            <span className="hidden-xs">Fernando</span>
          </a>
          <ul
            className={ `dropdown-menu dropdown-menu-lg dropdown-menu-right 'show' : ''
            }` }
          >
            <li className="dropdown-header">
              <img
                src="http://lorempixel.com/160/160/abstract"
                className="img-circle"
                alt="User profile"
              />
              <p>Fernando</p>
              <span>
                {/* <small> */}
                {/* {' '} */}
                {/* { email } */}
                {/* </small> */}
              </span>
            </li>
            renderLi()
          </ul>
        </li>
      </ul>
    );
  }
}

// const mapStateToProps = (state) => ({ user: state.auth.user });
// const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default Navbar;

