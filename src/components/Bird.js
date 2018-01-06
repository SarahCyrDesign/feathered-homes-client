import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addHeart } from '../actions/birdActions'

class Bird extends Component {

  handleOnHeart = () => {
    this.props.addHeart(this.props.bird.id, this.props.bird.hearts + 1)
  }

  callApi = () => {
    console.log('a')
    fetch('/api/birds')
    .then(response => {
      console.log('c')
      return response.json()})
    .then(birds => {
        console.log('d', birds)
    })
    console.log('b')
  }

  render(){
      const bird = this.props.bird;
      console.log(this.props)
      return (
        <div key={bird.id}>
          <Grid>
          <Grid.Column width={4}>
            <Link to={`/birds/${bird.id}`}><h2 className="adoptable">I need a home</h2></Link>
            <br></br>
            <p><img className="bird-photo" src={bird.photo} width="300" height="300" alt={'/images/adoptable_bird.png'} /></p>
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Bird Description:</h2>
            <p><strong>Name:</strong> {bird.name}</p>
            <p><strong>Breed:</strong> {bird.breed}</p>
            <p className="description">{bird.description}</p>
            <p><strong>Contact:</strong> {bird.contact_info}</p>
            <p><button
              className="heart-btn"
              onClick={this.handleOnHeart}>
              Fill a Heart
            </button> {bird.hearts} <i className="red heart icon"></i></p>
            </Grid.Column>
            <Grid.Column width={6}>
              <h2>Location:</h2>
              <iframe title={bird.id} width="300" height="300" frameBorder="0" className="location"
               src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyB87EmTF2pCpIhrchHozxrDYM-Vcj8aZoc&q=" + bird.address}
               allowFullScreen>
              </iframe>
            </Grid.Column>
          </Grid>
        </div>

      )
    }
  }

  export default connect(null, { addHeart })(Bird);
