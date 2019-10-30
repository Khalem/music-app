import React, {Component} from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';
import RelatedArtists from './Related';
import loading from './images/headphones-icon.gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      finalQuery: '',
      relatedArtists: null,
      artist: null,
      tracks: [],
      API_TOKEN: '',
      loading: false
    };
    this.changeArtist = this.changeArtist.bind(this);
  }

  componentDidMount() {
    /*
    Get API token from Spotify - it expires so create a new one each time component is mounted to avoid errors.
    */
    const FETCH_AUTH = "https://accounts.spotify.com/api/token";
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

    // Do actual request to recieve token
    fetch(PROXY_URL + FETCH_AUTH, {
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

    // Each time component mounts, fade in app.
    let app = document.getElementsByClassName('App')
    app[0].style.animation = 'fadeIn 1s';

  }

  search() {
    /*
    Search Spotifys API to fetch result and update state.
    */
    console.log('search() query state', this.state.query);

    if (this.state.query === '') {
      return false;
    }

    // Reset Tracks to avoid errors where no results would be found, but previous results still stored in state
    this.setState({
      tracks: [],
      loading: true,
      artist: null,
    })

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
      this.setState({ artist, finalQuery: this.state.query });

      /*
      Fetch artists top tracks
      */
      FETCH_URL = `${ALBUM_URL}/${this.state.artist.id}/top-tracks?country=IE`;
      fetch(FETCH_URL, FETCH_PARAMS)
      .then(response => response.json())
      .then(json => {
        const { tracks } = json;
        this.setState({tracks});
      })
      .catch(error => {
        console.log('fetching top tracks error:', error);
      });

      /*
      Fetch related artists
      */
      FETCH_URL = `${ALBUM_URL}/${this.state.artist.id}/related-artists`;
      fetch(FETCH_URL, FETCH_PARAMS)
      .then(response => response.json())
      .then(json => {
        const { artists } = json
        this.setState({ relatedArtists: artists, loading: false });
      })
      .catch(error => {
        console.log('related artists error:', error);
      });
    })
    .catch(error => {
      console.log('fetching artist error:', error);
      this.setState({ loading: false });
    });
  }

  changeArtist(artist) {
    this.state.query = artist.name;

    this.search();
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">React Music App</h1>
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
          // If loading content, show gif
          this.state.loading === true
          ? <img src={loading} alt="loading" width='35' className="loading-icon"/>
        // Else, show content
          :
          // If user has selected, show artist profile and gallery
          (<div>
            {
           // If there is content, show the content
            this.state.artist !== null & this.state.tracks.length > 1
            ? <div>
                <Profile
                  artist={this.state.artist}
                  tracks={this.state.tracks}
                  finalQuery={this.state.finalQuery}
                />
                <Gallery
                  tracks={this.state.tracks}
                />
                <RelatedArtists
                  relatedArtists={this.state.relatedArtists}
                  changeArtist={this.changeArtist}
                />
              </div>
              // Else show either instruction, or no result message
            : (<div>
                {
                  // If user hasn't searched yet, show instruction
                  this.state.finalQuery === ''
                  ? <div className="instruction"></div>
                  // Else if user has searched but there was no results, show message
                  : <h1 className="no-results">Sorry, we couldn't find any results for <em>'{this.state.finalQuery}'</em>, try another search.</h1>
                }
              </div>)
             }
           </div>)
        }
      </div>
    )
  }
}

export default App;
