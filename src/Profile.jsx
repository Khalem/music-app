import React, { Component } from 'react';
import './App.css';

class Profile extends Component {

  componentDidMount() {
    let gallery = document.getElementsByClassName('profile');
    gallery[0].style.animation = 'fadeIn 2s';
  }

  render(){
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
    artist = this.props.artist !== null ? this.props.artist : artist;

    if (this.props.tracks.length > 0) {
      return(
        <div className="profile">
          <img
            alt="Profile"
            className="profile-img"
            src={artist.images[0].url}
          />
          <div className="profile-info">
            <div className="profile-name">{artist.name}</div>
            <div className="profile-followers">{artist.followers.total} followers</div>
            <div className="profile-genres">
              {
                artist.genres.map((genre, key) => {
                  genre = genre !== artist.genres[artist.genres.length-1] ? ` ${genre},` : ` ${genre}`
                  return(
                    <span key={key}>{genre}</span>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default Profile;
