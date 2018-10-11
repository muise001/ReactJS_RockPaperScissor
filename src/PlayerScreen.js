import React, {Component} from 'react'

class PlayerScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosen : ''
    }
    this.PlayerChoice = this.PlayerChoice.bind(this)
  }

  PlayerChoice(e){
    this.setState({
      chosen : e.target.name
    })
    this.props.handleChange(e.target.name)
  }

  render(){
    return (
      <div>
        <button name="0" onClick={this.PlayerChoice}>Rock</button>
        <button name="1" onClick={this.PlayerChoice}>Paper</button>
        <button name="2" onClick={this.PlayerChoice}>Scissor</button>
      </div>
    )
  }
}

export default PlayerScreen
