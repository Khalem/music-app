import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  constructor(props) {
      super(props);
      this.state = {
        playingUrl: '',
        audio: null,
        playing: false
      }
  }

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingUrl: previewUrl,
        audio
      });
    } else {
      if (this.state.playingUrl === previewUrl) {
        this.state.audio.pause();
        this.setState({
          playing: false
        });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingUrl: previewUrl,
          audio
        });
      }
    }
  }

  render() {
    const { tracks } = this.props
    return(
      <div className="tracks-container">
        {tracks.map((track, key) => {
          const trackImg = track.album.images[0].url
          return(
            <div key={key} className="track" onClick={() => this.playAudio(track.preview_url)}>
              <img src={trackImg}
                className="track-img"
                alt="track"
              />
            <div className="track-play">
              <div className="track-play-inner">
                {
                  this.state.playingUrl === track.preview_url & this.state.playing === true
                  ? <i className="fas fa-pause"></i>
                  : <i className="fas fa-play"></i>
                }
              </div>
            </div>

              <p className="track-text">{track.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery;