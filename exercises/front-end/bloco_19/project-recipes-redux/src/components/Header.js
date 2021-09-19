import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchIngredient as fetchIngredientAction } from '../action';

import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false,
      searchBy: '',
      text: '',

    };

    this.showSearchBar = this.showSearchBar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleChange({ target }) {
    if (target.type === 'radio') this.setState({ searchBy: target.value });
    if (target.type === 'text') this.setState({ text: target.value });
  }

  showSearchBar() {
    const { isHidden } = this.state;
    this.setState({ isHidden: !isHidden });
  }

  showAlert() {
    // const alert = myCustomLib.customAlert;
    // alert(phrase);
  }

  submitSearch(searchIngredient) {
    const { text, searchBy } = this.state;
    if (searchBy === 'ingredient') {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`;
      return searchIngredient(url);
    } if (searchBy === 'name') {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
      return searchIngredient(url);
    }
    if (text.length > 1) {
      this.showAlert('Nao');
      return;
    }
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`;
    return searchIngredient(url);
  }

  toggleSearchBar() {
    const { text } = this.state;
    const { searchIngredient } = this.props;
    return (
      <>
        <label htmlFor="search-input">
          <input
            data-testid="search-input"
            type="text"
            name="search-input"
            id="search-input"
            value={ text }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="ingrediente">
          <input
            type="radio"
            name="radio-search"
            id="ingredient"
            onChange={ this.handleChange }
            value="ingredient"
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            name="radio-search"
            id="name"
            onChange={ this.handleChange }
            value="name"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            name="radio-search"
            id="first-letter"
            onChange={ this.handleChange }
            value="first-letter"
            data-testid="first-letter-search-radio"
          />
          Primeira Letra
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => this.submitSearch(searchIngredient) }
        >
          {' '}
          Buscar
        </button>
      </>
    );
  }

  render() {
    const { name } = this.props;
    const { isHidden } = this.state;

    return (
      <>
        <nav className="header">
          <Link to="/profile">
            <img data-testid="profile-top-btn" src={ ProfileIcon } alt="Profile icon" />
          </Link>
          <h1 data-testid="page-title">{name}</h1>
          <button
            type="button"
            onClick={ this.showSearchBar }
          >
            <img data-testid="search-top-btn" src={ SearchIcon } alt="Search Icon" />
          </button>
        </nav>
        {isHidden && this.toggleSearchBar()}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchIngredient: (url) => dispatch(fetchIngredientAction(url)),
});

export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  searchIngredient: PropTypes.func.isRequired,
};
