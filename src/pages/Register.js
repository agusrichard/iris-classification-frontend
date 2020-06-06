import React from 'react'
import Form from '../components/Form'


export default class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <div>
          <Form isLogin={ false } />
        </div>
      </div>
    )
  }
}