import React from 'react'
import AppContainer from '../components/AppContainer'
import Header from '../components/Header'
import CompetitionsGrid from '../components/CompetitionsGrid'
import Loading from '../components/Loading'
import { getCompetitions } from '../utils/firebase'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      competitions: []
    }
  }
  async componentDidMount() {
    this.setState({
      competitions: await getCompetitions()
    })
  }
  render() {
    return (
      <div>
        <Header />
        <AppContainer>
          <div className="constrained-width-sml center-on-desktop-not-mobile">
            <p className="margin-top-lrg font-weight-bold font-color-green">A Number Theory Tournament Built On Algorand</p>
            <p>Almost every number can be expressed as the sum of three cubes. Some solutions are small: 29 is 3³ + 1³ + 1³. Some solutions are big: 33 is 2,220,422,932³ + (-2,218,888,517)³ + (-283,059,965)³.</p>
            <p>There are only ten integers below 1,000 that we are still missing solutions to. In this tournament, there are 10 escrow Algorand contracts, one for each unsolved number. The first person to submit a correct solution gets all of the algos in the contract.</p>
            <p>To encourage mathematical research and raise the stakes, send some algos to the addresses of the escrow contracts.</p>
          </div>
          {
            this.state.competitions.length > 0 &&
            <CompetitionsGrid competitions={this.state.competitions}/>
          }
        </AppContainer>
      </div>
    )
  }
}

export default Index;
