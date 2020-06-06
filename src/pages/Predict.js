import React from 'react'
import { connect } from 'react-redux'
import CustomNavbar from '../components/CustomNavbar'
import { predict } from '../redux/actions/iris'

class Predict extends React.Component {
  state = {
    sepalLength: '',
    sepalWidth: '',
    petalLength: '',
    petalWidth: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      sepal_length: this.state.sepalLength,
      sepal_width: this.state.sepalWidth,
      petal_length: this.state.petalLength,
      petal_width: this.state.petalWidth
    }
    this.props.predict(this.props.token, data)
  }

  render() {
    return (
      <>
        <CustomNavbar transparent={ false } />
        <div className="predict-container">
          <div className="predict">
            <div className="predict-input-container">
              <form>
                <h3 className="text-white mb-5">Specify The Iris Characteristics: </h3>
                <input type="text" placeholder="Sepal Length" className="predict-input" name="sepalLength" onChange={this.handleChange} />
                <input type="text" placeholder="Sepal Width" className="predict-input" name="sepalWidth" onChange={this.handleChange}/>
                <input type="text" placeholder="Petal Length" className="predict-input" name="petalLength" onChange={this.handleChange}/>
                <input type="text" placeholder="Petal Width" className="predict-input" name="petalWidth" onChange={this.handleChange}/>
                <button className="btn-predict mt-4" onClick={this.handleSubmit}>Predict</button>
              </form>
            </div>
            <div className="predict-output-container">
              <h3 className="text-white mb-5">Result:</h3>
              <p className="result-text">{this.props.prediction ? this.props.prediction : 'Here'}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.loginToken,
  prediction: state.iris.data
})

export default connect(mapStateToProps, { predict })(Predict)