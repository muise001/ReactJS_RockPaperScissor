import React from 'react'

const CheatSheet = (props) => {
  if (props.cheat) {
    return (
      <div className="cheatSheet">
        <form>
          <label htmlFor="Won">Won</label>
          <input type="number" name="won" value={props.values.won} onChange={props.handleChange} id="Won"/>

          <label htmlFor="Lost">Lost</label>
          <input type="number" name="lost" value={props.values.lost} onChange={props.handleChange} id="Lost"/>

          <label htmlFor="tied">Tied</label>
          <input type="number" name="tie" value={props.values.tie} onChange={props.handleChange} id="tied"/>

          <label htmlFor="godMode">God-Mode</label>
          <input name="godMode" id="godMode" type="checkbox" onChange={props.handleChange}/>

          <input onClick={props.closeSheet} type="submit" value="cheat"/>
        </form>
      </div>
    )
  } else {
    return <div/>
  }


}

export default CheatSheet
