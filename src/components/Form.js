import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Form(props) {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <>
      <h3 className="form-title">{ !props.isLogin ? 'Sign Up' : 'Sign In' }</h3>
      <form style={{ textAlign: 'center' }}>
        { !props.isLogin && <input type="text" placeholder="Username" name="username" className="input-text" onChange={(e) => setUsername(e.target.value)} required/>}
        <input type="email" placeholder="Email" name="email" className="input-text" onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" name="password" className="input-text" onChange={(e) => setPassword(e.target.value)} required/>
        <button className="btn-submit" onClick={ !props.isLogin ? (e) => props.handleSubmit(e, username, email, password) : (e) => props.handleSubmit(e, email, password)}>{ !props.isLogin ? 'Sign Up' : 'Sign In' }</button>
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