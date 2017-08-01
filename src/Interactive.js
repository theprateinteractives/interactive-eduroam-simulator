import preact from 'preact';
import facebookImage from './screens/facebook.gif';
import netflixImage from './screens/netflix.gif';
import twitterImage from './screens/twitter.gif';
import youtubeImage from './screens/youtube.gif';
import wikipediaImage from './screens/wikipedia.gif';

const imageMap = {
  NETFLIX: netflixImage,
  FACEBOOK: facebookImage,
  TWITTER: twitterImage,
  WIKIPEDIA: wikipediaImage,
  YOUTUBE: youtubeImage,
};

export default class Interactive extends preact.Component {
  constructor() {
    super();

    this.state = {
      view: null,
    }
  }

  render(props, state) {
    return (
      <div>
        <h1>edu<em>roam</em></h1>
        <h2>simulator</h2>

        <p>Click a website to view</p>

       <button class="netflixbutton" onClick={() => this.setState({ view: 'NETFLIX' })}><b>Netflix</b></button>
       <button class="facebookbutton" onClick={() => this.setState({ view: 'FACEBOOK' })}><b>Facebook</b></button>
       <button class="twitterbutton" onClick={() => this.setState({ view: 'TWITTER' })}><b>Twitter</b></button>
       <button class="youtubebutton" onClick={() => this.setState({ view: 'YOUTUBE' })}><b><em>You</em>tube</b></button>
       <button class="wikibutton" onClick={() => this.setState({ view: 'WIKIPEDIA' })}><b>Wikipedia</b></button>

        {state.view !== null ? <img src={imageMap[state.view]} /> : null}
      </div>
    )
  }
}