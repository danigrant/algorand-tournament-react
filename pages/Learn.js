import AppContainer from '../components/AppContainer'
import Header from '../components/Header'
import YouTube from 'react-youtube';

const Learn = props => {
  return (
    <div>
      <Header />
      <AppContainer>
        <p className="margin-top-lrg font-color-yellow font-weight-bold">Diophantine Equations</p>
        <p>Numberphile really explains this best. Watch these three videos, get obsessed. Compete. Repeat.</p>
        <p>First, watch this one where they explain the puzzle and the outsanding mysteries.</p>
        <YouTube videoId="wymmCdLdPvM" />
        <p>Then, watch this one where they crack one of the unsolved mysteries mentioned in the video before.</p>
        <YouTube videoId="_-M_3oV75Lw" />
        <p>Then, watch this one where they crack one of the other unsolved mysteries mentioned in the video before.</p>
        <YouTube videoId="ASoz_NuIvP0" />
        <p>Then, watch this one where they crack the last unsolved number less than 100.</p>
        <YouTube videoId="zyG8Vlw5aAw" />
        <p>This tournament is about getting people cracking the 10 remaining unsolved numbers below 1,000.</p>
        <p>Happy solving!</p>
      </AppContainer>
    </div>
  )
}

export default Learn
