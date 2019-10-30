(this.webpackJsonpmusicapp=this.webpackJsonpmusicapp||[]).push([[0],{12:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/headphones-icon.99860b6c.gif"},19:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),c=a(5),l=a(6),o=a(9),u=a(7),m=a(10),h=a(8),p=(a(12),a(29)),d=a(31),f=a(32),y=a(30),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("profile")[0].style.animation="fadeIn 2s"}},{key:"render",value:function(){var e={name:"",followers:{total:""},images:[{url:""}],genres:[]};return e=null!==this.props.artist?this.props.artist:e,this.props.tracks.length>0?r.a.createElement("div",{className:"profile"},r.a.createElement("img",{alt:"Profile",className:"profile-img",src:e.images[0].url}),r.a.createElement("div",{className:"profile-info"},r.a.createElement("div",{className:"profile-name"},e.name),r.a.createElement("div",{className:"profile-followers"},e.followers.total," followers"),r.a.createElement("div",{className:"profile-genres"},e.genres.map((function(t,a){return t=t!==e.genres[e.genres.length-1]?" ".concat(t,","):" ".concat(t),r.a.createElement("span",{key:a},t)}))))):r.a.createElement("div",null)}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={playingUrl:"",audio:null,playing:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("tracks-container")[0].style.animation="fadeIn 3s"}},{key:"playAudio",value:function(e){var t=new Audio(e);this.state.playing?this.state.playingUrl===e?(this.state.audio.pause(),this.setState({playing:!1})):(this.state.audio.pause(),t.play(),this.setState({playing:!0,playingUrl:e,audio:t})):(t.play(),this.setState({playing:!0,playingUrl:e,audio:t}))}},{key:"mouseEnter",value:function(e){document.getElementById(e).style.background="linear-gradient(-45deg, rgba(255,85,85,1) 0%, rgba(250,56,96,1) 100%)"}},{key:"mouseLeave",value:function(e){document.getElementById(e).style.background="linear-gradient(-45deg, rgba(255,85,85,.75) 0%, rgba(250,56,96,.75) 100%)"}},{key:"render",value:function(){var e=this,t=this.props.tracks;return r.a.createElement("div",{className:"tracks-container"},r.a.createElement("h2",null,"Top 10 Tracks"),t.map((function(t,a){var n=t.album.images[0].url,s="track-text-".concat(a);return r.a.createElement("div",{key:a,className:"track",onClick:function(){return e.playAudio(t.preview_url)},onMouseOver:function(){return e.mouseEnter(s)},onMouseLeave:function(){return e.mouseLeave(s)}},r.a.createElement("img",{src:n,className:"track-img",alt:"track"}),null!==t.preview_url?r.a.createElement("div",{className:"track-play"},r.a.createElement("div",{className:"track-play-inner"},e.state.playingUrl===t.preview_url&!0===e.state.playing?r.a.createElement("i",{className:"fas fa-pause"}):r.a.createElement("i",{className:"fas fa-play"}))):r.a.createElement("div",null),r.a.createElement("p",{className:"track-text",id:s},t.name))})))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"artistMouseIn",value:function(e){console.log("TARGET",e.target),e.target.style.zIndex="102",e.target.nextSibling.style.zIndex="101"}},{key:"artistMouseOut",value:function(e){e.target.style.zIndex="100",e.target.nextSibling.style.zIndex="99"}},{key:"render",value:function(){var e=this,t=this.props.relatedArtists.slice(0,5);return r.a.createElement("div",null,r.a.createElement("h2",{className:"related-heading"},"Related Artists"),r.a.createElement("div",{className:"related-container"},t.map((function(t,a){return r.a.createElement("div",{className:"related-artist",key:a,onClick:function(){return e.props.changeArtist(t)}},r.a.createElement("img",{src:t.images[0].url,alt:"related artists profile picture",className:"related-img",onMouseEnter:function(t){return e.artistMouseIn(t)},onMouseLeave:function(t){return e.artistMouseOut(t)}}),r.a.createElement("h5",{className:"related-artist-text"},t.name))}))))}}]),t}(n.Component),k=a(16),N=a.n(k),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={query:"",finalQuery:"",relatedArtists:null,artist:null,tracks:[],API_TOKEN:"",loading:!1},a.changeArtist=a.changeArtist.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token",{body:"grant_type=client_credentials",headers:{Authorization:"Basic Y2I0ZjFkYWRhMDYxNDdhNjlhZGE4Njc2MjY0M2EwZjA6OWNhZTI4NmUxZDg3NGM4NGFhNTA0ZmYwNTJjNDZjNTk=","Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then((function(e){return e.json()})).then((function(t){e.setState({API_TOKEN:t.access_token})})).catch((function(e){return console.log(e)})),document.getElementsByClassName("App")[0].style.animation="fadeIn 1s"}},{key:"search",value:function(){var e=this;if(""===this.state.query)return!1;this.setState({tracks:[],loading:!0,artist:null});var t="https://api.spotify.com/v1/artists",a={method:"GET",headers:{Authorization:"Bearer ".concat(this.state.API_TOKEN)}},n="".concat("https://api.spotify.com/v1/search?","q=").concat(this.state.query,"&type=artist&limit=1");fetch(n,a).then((function(e){return e.json()})).then((function(r){var s=r.artists.items[0];e.setState({artist:s,finalQuery:e.state.query}),n="".concat(t,"/").concat(e.state.artist.id,"/top-tracks?country=IE"),fetch(n,a).then((function(e){return e.json()})).then((function(t){var a=t.tracks;e.setState({tracks:a})})).catch((function(e){console.log("fetching top tracks error:",e)})),n="".concat(t,"/").concat(e.state.artist.id,"/related-artists"),fetch(n,a).then((function(e){return e.json()})).then((function(t){var a=t.artists;e.setState({relatedArtists:a,loading:!1})})).catch((function(e){console.log("related artists error:",e)}))})).catch((function(t){console.log("fetching artist error:",t),e.setState({loading:!1})}))}},{key:"changeArtist",value:function(e){this.state.query=e.name,this.search()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-title"},"React Music App"),r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{type:"text",placeholder:"Search for an artist",value:this.state.query,onChange:function(t){e.setState({query:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&e.search()}}),r.a.createElement(d.a.Append,{onClick:function(){return e.search()}},r.a.createElement(y.a,null,r.a.createElement("i",{className:"fas fa-search"}))))),!0===this.state.loading?r.a.createElement("img",{src:N.a,alt:"loading",width:"35",className:"loading-icon"}):r.a.createElement("div",null,null!==this.state.artist&this.state.tracks.length>1?r.a.createElement("div",null,r.a.createElement(g,{artist:this.state.artist,tracks:this.state.tracks,finalQuery:this.state.finalQuery}),r.a.createElement(E,{tracks:this.state.tracks}),r.a.createElement(v,{relatedArtists:this.state.relatedArtists,changeArtist:this.changeArtist})):r.a.createElement("div",null,""===this.state.finalQuery?r.a.createElement("div",{className:"instruction"}):r.a.createElement("h1",{className:"no-results"},"Sorry, we couldn't find any results for ",r.a.createElement("em",null,"'",this.state.finalQuery,"'"),", try another search."))))}}]),t}(n.Component);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0f37249d.chunk.js.map