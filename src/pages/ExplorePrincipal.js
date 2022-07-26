import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorePrincipal({ history }) {
  return (
    <section>
      <Header />
      <button
        type="button"
        onClick={ () => history.push('/explore/foods') }
        data-testid="explore-foods"
      >
        Explore Foods
      </button>
      <button
        onClick={ () => history.push('/explore/drinks') }
        type="button"
        data-testid="explore-drinks"
      >
        Explore Drinks
      </button>
      <Footer />
    </section>
  );
}

ExplorePrincipal.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default ExplorePrincipal;
