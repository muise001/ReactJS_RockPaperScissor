import React, {Component} from 'react'
import CheckWinner from './checkWinner'
import CheatSheet from './cheatSheet'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cheat : false,
      godMode : false,
      lastoutcome : '',
      values : {
        won: 0,
        lost : 0,
        tie : 0
      }
    }
    this.toggleCheat = this.toggleCheat.bind(this)
    this.cheated = this.cheated.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toggleCheat(e){
    if (!this.state.cheat) {
      this.setState({cheat : true})
    }
  }

  cheated(e){
    e.preventDefault()
    this.setState({ cheat : false})
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name !== "godMode") {
      this.setState({
        lastoutcome : name,
        values : {
          ...this.state.values,
          [name] : parseInt(value)
        }
      })
    } else {
      this.setState((state) => ({
        godMode : !state.godMode
      }))
    }
  }

  render(){
     console.log(this.state.godMode)
    return (
      <div>
        <CheckWinner
          godMode={this.state.godMode}
          lastoutcome={this.state.lastoutcome}
          handleChange={this.handleChange}
          values={this.state.values}
          turnOnCheat={this.toggleCheat}
          applyCheat={this.state.cheated}/>
        <CheatSheet
          godMode={this.state.godMode}
          values={this.state.values}
          cheat={this.state.cheat}
          closeSheet={this.cheated}
          handleChange={this.handleChange}
          />
      </div>
    )
  }
}


export default App
