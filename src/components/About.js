import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const About = () => {
  return (
    <div>
      <Grid>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <h1>About Feathered Homes</h1>
          <p><em>Every bird deserves a home</em></p>
          <h3>Using Feathered Homes...</h3>
          <p>Anonymously place your bird for adoption using this link to, <Link to={`/birds/new`} >place a bird for adoption</Link></p>
          <p>To adopt a new bird, please visit <Link to={`/birds`} >bird adoption list.</Link></p>
          <p>To find all the bird rescues and sanctuaries in your area, please visit <Link to={`/sanctuaries`} >bird sanctuaries and rescues list.</Link></p>
          <div>
              <img src={'/images/about-pic.jpg'} alt='Cockatoo' />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <footer>© Sarah Cyr 2018</footer>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default About;
