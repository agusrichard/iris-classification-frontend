import React from 'react'
import { Link } from 'react-router-dom'


export default function Form(props) {
  return (
    <>
      <h3 className="form-title">{ !props.isLogin ? 'Sign Up' : 'Sign In' }</h3>
      <form style={{ textAlign: 'center' }}>
        { !props.isLogin && <input type="text" placeholder="Username" name="username" className="input-text" required/>}
        <input type="email" placeholder="Email" name="email" className="input-text" required/>
        <input type="password" placeholder="Password" name="password" className="input-text" required/>
        <button className="btn-submit">{ !props.isLogin ? 'Sign Up' : 'Sign In' }</button>
        { 
          !props.isLogin ?
          <span className="text-muted text-xs">
            Already have account? Sign In <Link to="/auth/login">here</Link>
          </span>
          :
          <span className="text-muted text-xs">
            No account yet? Sign Up <Link to="/auth/register">here</Link>
          </span>
        }
      </form>
    </>
  )
}