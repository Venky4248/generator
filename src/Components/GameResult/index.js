import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  Container,
  PopupContainer,
  Ct,
  Wrapper,
  BgContainer,
  PopupImage,
  PopupBt,
  PicBt,
  Para2,
  Bt,
  PicList,
  PicContainer,
  ResultContainer,
  CloseBt,
  PopupParaContainer,
  PlayContainer,
  Image,
  Head,
  Para1,
  ContainerBt,
  ScoreContainer,
  ParaContainer,
} from './StyledComponents'

class GameResult extends Component {
  state = {
    result: true,
    opponentResult: '',
    myResult: '',
    Score: 0,
    status: '',
  }

  OnClick = index => {
    const {GameDetails} = this.props
    const res = Math.floor(Math.random() * GameDetails.length)
    this.setState(prevState => ({result: !prevState.result}))

    this.setState({opponentResult: GameDetails[res].imageUrl})
    this.setState({myResult: GameDetails[index].imageUrl})
    const myChoice = GameDetails[index].id
    const opponentChoice = GameDetails[res].id
    if (myChoice === opponentChoice) {
      this.setState({status: 'IT IS DRAW'})
    } else if (
      (myChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (myChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (myChoice === 'PAPER' && opponentChoice === 'ROCK')
    ) {
      this.setState(prevState => ({
        Score: prevState.Score + 1,
        status: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        Score: prevState.Score - 1,
        status: 'YOU LOSE',
      }))
    }
  }

  OnClicked = index1 => {
    const {GameDetails} = this.props
    const res = Math.floor(Math.random() * GameDetails.length)
    this.setState(prevState => ({result: !prevState.result}))

    this.setState({opponentResult: GameDetails[res].imageUrl})
    this.setState({myResult: GameDetails[index1].imageUrl})
    const myChoice = GameDetails[index1].id
    const opponentChoice = GameDetails[res].id
    if (myChoice === opponentChoice) {
      this.setState({status: 'IT IS DRAW'})
    } else if (
      (myChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (myChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (myChoice === 'PAPER' && opponentChoice === 'ROCK')
    ) {
      this.setState(prevState => ({
        Score: prevState.Score + 1,
        status: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        Score: prevState.Score - 1,
        status: 'YOU LOSE',
      }))
    }
  }

  PlayAgain = () => {
    this.setState(prevState => ({result: !prevState.result}))
  }

  render() {
    const {Score, result, status, opponentResult, myResult} = this.state
    const {GameDetails} = this.props
    console.log(opponentResult)
    console.log(Score)
    return (
      <BgContainer>
        <Container>
          <Ct>
            <ParaContainer>
              <Head>Rock Paper Scissors</Head>
            </ParaContainer>
            <ScoreContainer>
              <Para1>SCORE</Para1>
              <Para1>{Score}</Para1>
            </ScoreContainer>
          </Ct>
          {result ? (
            <PicList>
              <PicContainer>
                {GameDetails.slice(0, 2).map((each, index) => (
                  <PicBt
                    type="button"
                    onClick={() => this.OnClick(index)}
                    data-testid={index === 0 ? 'rockButton' : 'scissorsButton'}
                  >
                    <Image src={each.imageUrl} alt={each.id} />
                  </PicBt>
                ))}
              </PicContainer>
              {GameDetails.slice(2, 3).map((each1, index1) => (
                <PicBt
                  type="button"
                  onClick={() => this.OnClicked(index1 + 2)}
                  data-testid="paperButton"
                >
                  <Image src={each1.imageUrl} alt={each1.id} />
                </PicBt>
              ))}
            </PicList>
          ) : (
            <PlayContainer>
              <ResultContainer>
                <Image src={myResult} alt="your choice" />
                <Image src={opponentResult} alt="opponent choice" />
              </ResultContainer>
              <Para2>{status}</Para2>
              <Bt type="button" onClick={this.PlayAgain}>
                PLAY AGAIN
              </Bt>
            </PlayContainer>
          )}
        </Container>
        <PopupContainer>
          <Popup
            modal
            trigger={
              <Wrapper>
                <PopupBt type="button">Rules</PopupBt>
              </Wrapper>
            }
          >
            {close => (
              <>
                <ContainerBt>
                  <CloseBt type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseBt>
                </ContainerBt>
                <PopupParaContainer>
                  <PopupImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupParaContainer>
              </>
            )}
          </Popup>
        </PopupContainer>
      </BgContainer>
    )
  }
}
export default GameResult
