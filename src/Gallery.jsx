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

  componentDidMount() {
    let gallery = document.getElementsByClassName('tracks-container');
    gallery[0].style.animation = 'fadeIn 3s';
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

  mouseEnter(id) {
    let trackText = document.getElementById(id);
    trackText.style.background = 'linear-gradient(-45deg, rgba(255,85,85,1) 0%, rgba(250,56,96,1) 100%)';
  }

  mouseLeave(id) {
    let trackText = document.getElementById(id);
    trackText.style.background = 'linear-gradient(-45deg, rgba(255,85,85,.75) 0%, rgba(250,56,96,.75) 100%)';
  }

  render() {
    const { tracks } = this.props

    return(
      <div className="tracks-container">
        <h2>Top 10 Tracks</h2>
        {tracks.map((track, key) => {
          const trackImg = track.album.images[0].url;
          const trackTextId = `track-text-${key}`;
          return(
            <div key={key} className="track" onClick={() => this.playAudio(track.preview_url)} onMouseOver={() => this.mouseEnter(trackTextId)} onMouseLeave={() => this.mouseLeave(trackTextId)}>
              <img src={trackImg}
                className="track-img"
                alt="track"
              />
            {
              track.preview_url !== null
              ? <div className="track-play">
                  <div className="track-play-inner">
                    {
                      this.state.playingUrl === track.preview_url & this.state.playing === true
                      ? <i className="fas fa-pause"></i>
                      : <i className="fas fa-play"></i>
                    }
                  </div>
                </div>
              : <div></div>
            }

              <p className="track-text" id={trackTextId}>{track.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery;
