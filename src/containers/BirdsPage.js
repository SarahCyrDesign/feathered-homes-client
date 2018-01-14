import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import Bird from '../components/Bird';

class BirdsPage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      filterByHearts: false,
      filterByNames: false
    };
  }

        updateSearch(event) {
          this.setState({search: event.target.value})
        }

        handleHeartsOnClick(event) {
          this.setState({filterByHearts: true, filterByNames: false})
        }

        handleBirdNamesOnClick(event) {
          this.setState({filterByNames: true, filterByHearts: false})
        }


        render() {
          let searchState = this.state.search

          let filteredBirds = this.props.birds.filter((bird) => {
            return bird.breed.toLowerCase().indexOf(searchState.toLowerCase()) !== -1;
          })




          if (this.state.filterByHearts) {

          } else if (this.state.filterByNames) {

          } else {
            filteredBirds
          }

          // let sortedBirdsHearts = this.state.filteredBirds.sort((bird1, bird2) =>        return (bird2.hearts - bird1.hearts)
          // })


            // let sortedBirdsNames = filteredBirds.sort((bird1, bird2) => (bird2.name - bird1.name)
            //   return sortedBirdsNames.map((bird) => {
            //     <Segment key={bird.id} >
            //       <Bird bird={bird}/>
            //     </Segment>
            // }))


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

        <p><button
          className="heart-btn"
          onClick={this.handleHeartsOnClick.bind(this)}>
          Sort Birds by Hearts
        </button></p>

        <p><button
          className="heart-btn"
          onClick={this.handleBirdNamesOnClick.bind(this)}>
          Sort Birds by Name
        </button></p>

        <ul>
          {filteredBirds.map((bird)=> {
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
