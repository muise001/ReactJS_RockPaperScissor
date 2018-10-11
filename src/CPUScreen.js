import React, {Component} from 'react'
import PlayerSide from './whatPicToShow'

class CPUScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      computerchoice : 'to play',
    }
    this.calculate = this.calculate.bind(this)
  }

  calculate(PlayerChoice){
    console.log(this.props.godmode);
    var calc = 0
    if (this.props.godmode) {
      if (PlayerChoice === "0") {
        calc = 2
        this.setState({computerchoice : 'Scissor'})
      } else if (PlayerChoice === "1") {
        calc = 0
        this.setState({computerchoice : 'Rock'})
      } else if (PlayerChoice === "2") {
        calc = 1
        this.setState({computerchoice : 'Paper'})
      }
      this.props.calcWinner(PlayerChoice, calc)
    } else {
      calc = Math.floor(Math.random() * Math.floor(3))
      if (calc === 0) {
        this.setState({computerchoice : 'Rock'})
      } else if (calc === 1) {
        this.setState({computerchoice : 'Paper'})
      } else if (calc === 2) {
        this.setState({computerchoice : 'Scissor'})
      }
      this.props.calcWinner(PlayerChoice, calc)
    }
  }


  render(){
    return(
      <div className = "playField">
        <PlayerSide
          calculate = {this.calculate}/>
        <h1 onDoubleClick={this.props.turnOnCheat} > {this.state.computerchoice}</h1>
      </div>
    )
  }
}

export default CPUScreen
