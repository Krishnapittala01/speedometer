// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speed-image"
        />
        <h1 className="speed-para">Speed is {speed}mph</h1>
        <p className="caution">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            onClick={this.onAccelerate}
            className="accelerate-button"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.onBrake} className="brake-button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
