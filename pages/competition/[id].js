import React from 'react'
import AppContainer from '../../components/AppContainer'
import Header from '../../components/Header'
import { withRouter } from 'next/router'

class SubmitSolutionPage extends React.Component {
  constructor(props) {
    super(props)
    const { router } = this.props
    this.state = {
      isSubmitted: false,
      selectedCompetition: router.query.id,
      integerA: 0,
      integerB: 0,
      integerC: 0,
      algorandAddress: "",
      submitterName: "",
      submitterEmail: "",
      submitResponse: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async handleSubmit() {
    this.setState({
      isSubmitted: true
    })
    let res = await fetch(`https://algorand-tournament-server.herokuapp.com/competition/${this.state.selectedCompetition}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        a: this.state.integerA,
        b: this.state.integerB,
        c: this.state.integerC,
        algorandAddress: this.state.algorandAddress,
        submitterName: this.state.submitterName,
        submitterEmail: this.state.submitterEmail
      })
    })
    let json = await res.json()
    this.setState({
      submitResponse: json
    })
    console.log(json);
  }
  handleCompetitionSelectChange = e => {
      this.setState({
        selectedCompetition: e.target.value
      })
  }
  handleIntegerAChange = e => {
    this.setState({
      integerA: e.target.value
    })
  }
  handleIntegerBChange = e => {
    this.setState({
      integerB: e.target.value
    })
  }
  handleIntegerCChange = e => {
    this.setState({
      integerC: e.target.value
    })
  }
  handleAlgorandAddressChange = e => {
    this.setState({
      algorandAddress: e.target.value
    })
  }
  handleNameChange = e => {
    this.setState({
      submitterName: e.target.value
    })
  }
  handleEmailChange = e => {
    this.setState({
      submitterEmail: e.target.value
    })
  }
  render() {
    const { router } = this.props
    if (!this.state.isSubmitted) {
      return (
        <div>
          <Header />
          <AppContainer>
            <p className="margin-top-lrg font-color-yellow font-weight-bold">Solve The Diophantine Equation for {this.state.selectedCompetition}</p>
            <form>
              <p className="margin-top-med font-weight-bold">Which integer are you submitting a solution for?</p>
              <select onChange={this.handleCompetitionSelectChange} name="competition-select">
                <option selected={this.state.selectedCompetition == 6} value="6">6</option>
                <option selected={this.state.selectedCompetition == 114} value="114">114</option>
                <option selected={this.state.selectedCompetition == 165} value="165">165</option>
                <option selected={this.state.selectedCompetition == 390} value="390">390</option>
                <option selected={this.state.selectedCompetition == 579} value="579">579</option>
                <option selected={this.state.selectedCompetition == 627} value="627">627</option>
                <option selected={this.state.selectedCompetition == 633} value="633">633</option>
                <option selected={this.state.selectedCompetition == 732} value="732">732</option>
                <option selected={this.state.selectedCompetition == 906} value="906">906</option>
                <option selected={this.state.selectedCompetition == 921} value="921">921</option>
                <option selected={this.state.selectedCompetition == 975} value="975">975</option>
              </select>
              <p className="margin-bottom-none font-weight-bold">Submit answer to the diophantine puzzle a³ + b³ + c³ = 114</p>
              <p className="margin-top-none">What three integers can you sum the cubes of to get 114?</p>
              <div className="margin-top-med columns-parent-div">
                <div className="column-30-p">
                  Integer a:
                </div>
                <div className="column-70-p">
                  <input onChange={this.handleIntegerAChange} className="rounded-border green-border background-light-blue" type="number" />
                </div>
              </div>
              <div className="columns-parent-div">
                <div className="column-30-p">
                  Integer b:
                </div>
                <div className="column-70-p">
                  <input onChange={this.handleIntegerBChange} className="rounded-border green-border background-light-blue" type="number" />
                </div>
              </div>
              <div className="columns-parent-div">
                <div className="column-30-p">
                  Integer c:
                </div>
                <div className="column-70-p">
                  <input onChange={this.handleIntegerCChange} className="rounded-border green-border background-light-blue" type="number" />
                </div>
              </div>
              <p className="margin-bottom-none font-weight-bold">If you’ve found the solution, we’ll send you the 32 Algos in the escrow prize pool.</p>
              <p className="margin-top-none">What is your Algorand address?</p>
              <input onChange={this.handleAlgorandAddressChange} className="margin-top-sml rounded-border green-border background-light-blue" type="text" />
              <p className="margin-bottom-none font-weight-bold">What should we call you when we display you on the leaderboard?</p>
              <p className="margin-top-none">What is your name?</p>
              <input onChange={this.handleNameChange} className="margin-top-sml rounded-border green-border background-light-blue" type="text" />
              <p className="margin-bottom-none font-weight-bold">It may take a little bit to verify but we'll email you when we're done.</p>
              <p className="margin-top-none">What is your email?</p>
              <input onChange={this.handleEmailChange} className="margin-top-sml rounded-border green-border background-light-blue" type="email" />
            </form>
            <div onClick={this.handleSubmit} className="button font-color-dark-blue rounded-border center">Submit!</div>
          </AppContainer>
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <AppContainer>
            <p>woot!</p>
            {JSON.stringify(this.state.submitResponse)}
          </AppContainer>
        </div>
      )
    }
  }
}

export default withRouter(SubmitSolutionPage)
