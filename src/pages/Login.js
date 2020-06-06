import React from 'react'
import Form from '../components/Form'
import { connect } from 'react-redux'
import { login } from '../redux/actions/auth'


class Login extends React.Component {

  handleSubmit = (e, email, password) => {
    e.preventDefault()
    console.log(email, password)
    this.props.login(email, password)
    if (this.props.isSuccess) {
      this.props.history.push('/')
    } else {
      console.log('sucks')
    }
  }

  render() {
    return (
      <div className="login">
        <div>
          <Form isLogin={ true } handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  isSuccess: state.auth.isSuccess
})

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)