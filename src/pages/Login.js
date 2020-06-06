import React from 'react'
import Form from '../components/Form'


export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div>
          <Form isLogin={ true } />
        </div>
      </div>
    )
  }
}