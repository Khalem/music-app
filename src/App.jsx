import React, {Component} from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: [],
      API_TOKEN: ''
    }
  }

  componentDidMount() {
    /*
    Get API token from Spotify - it expires so create a new one each time component is mounted to avoid errors.
    */
    const FETCH_AUTH = "https://accounts.spotify.com/api/token";

    fetch(FETCH_AUTH, {
      body: "grant_type=client_credentials",
      headers: {
        Authorization: "Basic Y2I0ZjFkYWRhMDYxNDdhNjlhZGE4Njc2MjY0M2EwZjA6OWNhZTI4NmUxZDg3NGM4NGFhNTA0ZmYwNTJjNDZjNTk=",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ API_TOKEN: json.access_token });
      console.log(json);
    })
    .catch(error => console.log(error))
  }

  search() {
    /*
    Search Spotifys API to fetch result and update state.
    */
    console.log(process.env.API_TOKEN);
    const BASE_URL = "https://api.spotify.com/v1/search?";
    const ALBUM_URL = 'https://api.spotify.com/v1/artists'
    const FETCH_PARAMS = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.API_TOKEN}`
      }
    }
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

    fetch(FETCH_URL, FETCH_PARAMS)
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({ artist });
      
      /*
      Fetch artists top tracks
      */
      FETCH_URL = `${ALBUM_URL}/${artist.id}/top-tracks?country=IE`
      fetch(FETCH_URL, FETCH_PARAMS)
      .then(response => response.json())
      .then(json => {
        console.log('artist\'s top tracks', json);
        const { tracks } = json;
        this.setState({tracks});
      })
      .catch(error => {
        console.log('error', error);
      })
    })
    .catch(error => {
      console.log('error', error);
    });


  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Music App</h1>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}/>
            <InputGroup.Append onClick={() => this.search()}>
              <Button><i className="fas fa-search"></i></Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
          ? <div>
              <Profile
                artist={this.state.artist}
              />
              <div className="Gallery">
                Gallery
              </div>
            </div>
          : <div></div>
        }

      </div>
    )
  }
}

export default App;
