import React, {Component} from 'react'
import CPUScreen from './CPUScreen'

class CheckWinner extends Component {
  constructor(props) {
    super(props)

    this.calcWinner = this.calcWinner.bind(this)
    // this.changeRules = this.changeRules.bind(this)
  }

  calcWinner(PlayerChoice, Computerchoice){
    console.log(PlayerChoice, Computerchoice);
    if (PlayerChoice === '0' && Computerchoice === 1) {
      this.props.handleChange({ target: { name: 'lost', value: this.props.values.lost + 1 } })
    } else if (PlayerChoice === '0' && Computerchoice === 2) {
      this.props.handleChange({ target: { name: 'won', value: this.props.values.won + 1 } })
    } else if (PlayerChoice === '1' && Computerchoice === 2) {
      this.props.handleChange({ target: { name: 'lost', value: this.props.values.lost + 1 } })
    } else if (PlayerChoice === '1' && Computerchoice === 0) {
      this.props.handleChange({ target: { name: 'won', value: this.props.values.won + 1 } })
    } else if (PlayerChoice === '2' && Computerchoice === 0) {
      this.props.handleChange({ target: { name: 'lost', value: this.props.values.lost + 1 } })
    } else if (PlayerChoice === '2' && Computerchoice === 1) {
      this.props.handleChange({ target: { name: 'won', value: this.props.values.won + 1 } })
    } else {
      this.props.handleChange({ target: { name: 'tie', value: this.props.values.tie + 1 } })
    }
  }


  render(){
    return(
      <div>
      <div className="scoreBoard">
        <p>Wins {this.props.values.won}</p>
        <p>Lost {this.props.values.lost}</p>
        <p>Tied {this.props.values.tie}</p>
      </div>
      <div>
        <h1 className="stateMsg">{this.props.lastoutcome}</h1>
        <CPUScreen
          godmode={this.props.godMode}
          turnOnCheat ={ this.props.turnOnCheat}
          calcWinner = {this.calcWinner}/>
      </div>
      </div>
    )
  }


}

export default CheckWinner
