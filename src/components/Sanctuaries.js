import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';


const Sanctuaries = () => {
  return (
    <div>
      <Grid>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <h1>Find a Bird Rescue or Sanctuary in your Area</h1>
          <br></br>
          <iframe title="petFinder"
          src="https://www.petfinder.com/animal-shelters-and-rescues/search/?location=&shelter_name=Bird"
width="700px" height="600px" hspace="0" vspace="0" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0"></iframe>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    </div>
  );
};


export default Sanctuaries;
