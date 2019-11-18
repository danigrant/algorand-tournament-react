import AppContainer from '../components/AppContainer'
import Header from '../components/Header'
import { withRouter } from 'next/router'

const Leaderboard = props => {
  const { router } = props
  return (
    <div>
      <Header />
      <AppContainer>
        <p className="margin-top-lrg font-color-yellow font-weight-bold">Leaderboard</p>
        <p><span className="font-weight-bold font-color-green">114:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">165:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">390:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">579:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">627:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">633:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">732:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">906:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">921:</span> Still unsolved, could be you!</p>
        <p><span className="font-weight-bold font-color-green">975:</span> Still unsolved, could be you!</p>
      </AppContainer>
    </div>
  )
}

export default withRouter(Leaderboard)
