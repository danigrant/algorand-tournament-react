import React from 'react'
import AppContainer from '../../components/AppContainer'
import Header from '../../components/Header'
import { withRouter } from 'next/router'

class SubmitSolutionPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { router } = this.props
    return (
      <div>
        <Header />
        <AppContainer>
          <div className="constrained-width-sml margin-top-xtr">
            <p className="font-color-yellow font-weight-bold">Solve The Diophantine Equation for 114</p>
            <form>
              <p className="margin-top-med font-weight-bold">Submit answer to the diophantine puzzle a³ + b³ + c³ = 114</p>
              <p>What three integers can you sum the cubes of to get 114?</p>
              <div className="columns-parent-div">
                <div className="column-30-p">
                  Integer a:
                </div>
                <div className="column-70-p">
                  <input className="rounded-border green-border background-light-blue" type="number" />
                </div>
              </div>
              <div className="columns-parent-div">
                <div className="column-30-p">
                  Integer b:
                </div>
                <div className="column-70-p">
                  <input className="rounded-border green-border background-light-blue" type="number" />
                </div>
              </div>
              <div className="columns-parent-div">
                <div className="column-30-p">
                  Integer c:
                </div>
                <div className="column-70-p">
                  <input className="rounded-border green-border background-light-blue" type="number" />
                </div>
              </div>
              <p className="font-weight-bold">If you’ve found the solution, we’ll send you the 32 Algos in the escrow prize pool.</p>
              <p>What is your Algorand address?</p>
              <input className="rounded-border green-border background-light-blue" type="text" />
              <p className="font-weight-bold">What should we call you when we display you on the leaderboard?</p>
              <p>What is your name?</p>
              <input className="rounded-border green-border background-light-blue" type="text" />
            </form>
          </div>
        </AppContainer>
      </div>
    )
  }
}

export default withRouter(SubmitSolutionPage)
