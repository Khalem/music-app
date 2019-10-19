import React, { Component } from 'react';

class RelatedArtists extends Component {

  artistMouseIn(e) {
    console.log('TARGET', e.target);
    e.target.style.zIndex = '102';
    e.target.nextSibling.style.zIndex = '101';
  }

  artistMouseOut(e) {
    e.target.style.zIndex = '100';
    e.target.nextSibling.style.zIndex = '99';
  }

  render() {
    const relatedArtists = this.props.relatedArtists.slice(0, 5);

    console.log('related Artists props', relatedArtists);

    return(
      <div>
        <h2 className="related-heading">Related Artists</h2>
        <div className="related-container">
          {
            relatedArtists.map((artist, key) => {
              return(
                <div
                  className="related-artist"
                  key={key}
                  onClick={() => this.props.changeArtist(artist)}
                >
                  <img
                    src={artist.images[0].url} alt="related artists profile picture"
                    className="related-img"
                    onMouseEnter={(e) => this.artistMouseIn(e)}
                    onMouseLeave={(e) => this.artistMouseOut(e)}
                  />
                  <h5 className="related-artist-text">{artist.name}</h5>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default RelatedArtists;
