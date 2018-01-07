import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import Bird from '../components/Bird';

class BirdsPage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render() {
    let searchState = this.state.search
    let filteredBirds = this.props.birds.filter((bird) => {
      return bird.breed.toLowerCase().indexOf(searchState.toLowerCase()) !== -1;
      }
    );
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
        <ul>
          {filteredBirds.reverse().map((bird)=> {
            return <Segment key={bird.id} >
              <Bird bird={bird}/>
            </Segment>
          })}
        </ul>

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
