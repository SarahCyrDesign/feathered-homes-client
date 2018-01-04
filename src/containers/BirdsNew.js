import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { addBird } from '../actions/birdActions';

const CLOUDINARY_UPLOAD_PRESET = 'lntx0yna';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/sarahcyrdesign/upload';
const CLOUDINARY_API =  '113585497681167';

class BirdsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bird: {
        name: '',
        breed: '',
        description: '',
        address: '',
        contact_info: '',
        photoUrl: '',
        photo: ''
      }
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addBird, history } = this.props;
       addBird(this.state);
    history.push(`/birds`)
    }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDrop = files => {
  const uploaders = files.map(file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("api_key", CLOUDINARY_API);
    return axios.post(CLOUDINARY_UPLOAD_URL, formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url
      console.log(data);
      this.setState({
            photo: fileURL
          });
    })
  });

  axios.all(uploaders).then(() => {
  });


  }

  handleCancel = event => {
    this.props.history.push(`/birds`)
  }



  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>Place a Bird for Adoption</h2>
            <form className="form sortable-handler" onSubmit={this.handleOnSubmit} >
            <h3>Name: <input
                type="text"
                placeholder="Bird Name"
                name="name"
                ref="name"
                onChange={this.handleOnChange} /></h3>
            <h3>Breed: <input
                type="text"
                placeholder="Breed"
                name="breed"
                ref="breed"
                onChange={this.handleOnChange} /></h3>
            <h3>Description: <input
                type="text"
                placeholder="colors, age... "
                name="description"
                ref="description"
                onChange={this.handleOnChange} /></h3>
            <h3>Address:</h3>
            <p><textarea rows="4" cols="35"
                name="address"
                ref="address"
                placeholder="(include street number, street name, city, and state)"
                onChange={this.handleOnChange} /></p>
            <h3>Contact Info: <input
                type="text"
                placeholder="contact phone or email"
                name="contact_info"
                ref="contact_info"
                onChange={this.handleOnChange} /></h3>
              <Dropzone
                name="photo"
                 onDrop={this.handleDrop}
                 multiple
                 accept="image/*" >
                 <p>Drop a photo or click here to upload:</p>
               </Dropzone>
              <br></br>
              <br></br>
              <input
                type="submit"
                className="btn btn-primary"
                value="Place Bird for adoption" />
              <button
                onClick={this.handleCancel}
                className="btn btn-danger">
                Cancel
              </button>
            </form>
            <img className="preview-image" src={this.state.photo} alt=""/>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
};

export default connect(null, { addBird })(BirdsNew);
