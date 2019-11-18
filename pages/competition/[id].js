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
          <p className="margin-top-lrg font-color-yellow font-weight-bold">Solve The Diophantine Equation for 114</p>
          <form>
            <p className="margin-bottom-none margin-top-med font-weight-bold">Submit answer to the diophantine puzzle a³ + b³ + c³ = 114</p>
            <p className="margin-top-none">What three integers can you sum the cubes of to get 114?</p>
            <div className="margin-top-med columns-parent-div">
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
            <p className="margin-bottom-none font-weight-bold">If you’ve found the solution, we’ll send you the 32 Algos in the escrow prize pool.</p>
            <p className="margin-top-none">What is your Algorand address?</p>
            <input className="margin-top-sml rounded-border green-border background-light-blue" type="text" />
            <p className="margin-bottom-none font-weight-bold">What should we call you when we display you on the leaderboard?</p>
            <p className="margin-top-none">What is your name?</p>
            <input className="margin-top-sml rounded-border green-border background-light-blue" type="text" />
          </form>
          <div className="button font-color-dark-blue rounded-border center">Submit!</div>
        </AppContainer>
      </div>
    )
  }
}

export default withRouter(SubmitSolutionPage)
