import React from 'react'
import Form from '../components/Form'
import { connect } from 'react-redux'
import { register } from '../redux/actions/auth'


class Register extends React.Component {
  
  handleSubmit = (e, username, email, password) => {
    e.preventDefault()
    console.log(username, email, password)
    this.props.register(username, email, password)
    if (this.props.isSuccess) {
      console.log('success')
    } else {
      console.log('sucks')
    }
  }

  render() {
    return (
      <div className="register">
        <div>
          <Form isLogin={ false } handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  isSuccess: state.auth.isSuccess
})

const mapDispatchToProps = { register }

export default connect(mapStateToProps, mapDispatchToProps)(Register)