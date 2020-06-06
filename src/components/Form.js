import React from 'react'


export default function Form(props) {
  return (
    <>
      <h3 className="form-title">Sign Up</h3>
      <form style={{ textAlign: 'center' }}>
        { !props.isLogin && <input type="text" placeholder="Username" name="username" className="input-text" required/>}
        <input type="email" placeholder="Email" name="email" className="input-text" required/>
        <input type="password" placeholder="Password" name="password" className="input-text" required/>
        <button className="btn-submit">Sign Up</button>
      </form>
    </>
  )
}