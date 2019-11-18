import AppContainer from './AppContainer'
import Header from './Header'

const Loading = props => {
  return (
    <div>
      <Header />
      <AppContainer>
        <p>Loading ...</p>
      </AppContainer>
    </div>
  )
}

export default Loading
