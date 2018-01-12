import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import Bird from '../components/Bird';

class BirdsPage extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

        updateSearch(event) {
          this.setState({search: event.target.value})
        }



        render() {
          let searchState = this.state.search

          let filteredBirds = this.props.birds.filter((bird) => {
            return bird.breed.toLowerCase().indexOf(searchState.toLowerCase()) !== -1;
          })

{/* Sort by Hearts and names event handlers */}
          sortBirdsByHearts = (event) => {
            let sortedBirdsHearts = filteredBirds.sort((bird1, bird2) => (bird2.hearts - bird1.hearts));
            return sortedBirdsHearts.map(bird => bird.id);
          }


          sortBirdsByNames = (event) => {
            let sortedBirdsNames = filteredBirds.sort((bird1, bird2) => (bird2.name - bird1.name));
            return sortedBirdsNames.map(bird => bird.id);
          }



    return (
      <div>
        <br></br>
        <header>
          <h1>Adoptable Birds</h1>
          <em>Type the breed of the bird to filter: </em>
          <input type="text"
            value={this.state.search}
            placeholder=" breed "
            onChange={this.updateSearch.bind(this)}/>
        </header>
        <br></br>

        {/* Filter by Hearts and names buttons */}
        <p><button
          className="heart-btn"
          onClick={this.sortBirdsByHearts.bind(this)}>
          Sort Birds by Hearts
        </button></p>

        <p><button
          className="heart-btn"
          onClick={this.sortBirdsByNames.bind(this)}>
          Sort Birds by Name
        </button></p>

    </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    birds: state.birds
  };
}

export default connect(mapStateToProps)(BirdsPage);
