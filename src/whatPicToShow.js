import React, {Component} from 'react'
import PlayerScreen from './PlayerScreen'

class PlayerSide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosen : 'PlayerSide',
    }
    this.changeTitle = this.changeTitle.bind(this)
  }

  changeTitle(e){
    if (e === '0') {
      this.setState({chosen : 'Rock'})
    } else if (e === '1') {
      this.setState({chosen : 'Paper'})
    } else if (e === '2') {
      this.setState({chosen : 'Scissor'})
    }
    this.props.calculate(e)
  }

  render() {
    return(
      <div>
        <h1>{this.state.chosen}</h1>
        <PlayerScreen handleChange={this.changeTitle}/>
      </div>
    )
  }
}

export default PlayerSide
