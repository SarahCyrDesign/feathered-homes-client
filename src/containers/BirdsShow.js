import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Bird from '../components/Bird';

const BirdsShow = ({ bird }) =>
  <div>
    <Bird key={bird.id} bird={bird}/>
    <h3 className="App-link"><Link to={`/birds`}> Back</Link></h3>
  </div>

const mapStateToProps = (state, ownProps) => {
  const bird = state.birds.find(bird => bird.id === +ownProps.match.params.birdId)

  if (bird) {
    return { bird }
  } else {
    return { bird: {} }
  }
};

export default connect(mapStateToProps)(BirdsShow);
