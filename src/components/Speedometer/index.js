import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  brake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img-container"
            alt="speedometer"
          />
        </div>
        <div>
          <h1 className="speed">Speed is {count}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
        <div className="button">
          <button onClick={this.accelerate}>Accelerate</button>
          <button onClick={this.brake}>Apply Brake</button>
        </div>
      </div>
    )
  }
}

export default Speedometer
