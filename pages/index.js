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
    if (!this.state.competitions.length) {
      return <Loading />
    } else {
      return (
        <div>
          <Header />
          <AppContainer>
            <div className="constrained-width-sml center-on-desktop-not-mobile">
              <p className="margin-top-lrg font-weight-bold font-color-green">A Number Theory Tournament Built On Algorand</p>
              <p>Diophantine Equations take the form a³ + b³ + c³ = d. There are known diophantine equations for most real numbers under 1,000 (or it is known that there is no solution for that number). There are only 10 left to be solved.</p>
              <p>In this tournament, there are 10 escrow Algorand contracts, one for each unsolved number. The first person to submit a correct diophantine equation to each address gets all of the algos in the contract.</p>
              <p>To encourage mathematical research and raise the stakes, send some algos to the addresses of the escrow contracts.</p>
            </div>
            <CompetitionsGrid competitions={this.state.competitions}/>
          </AppContainer>
        </div>
      )
    }
  }
}

export default Index;
