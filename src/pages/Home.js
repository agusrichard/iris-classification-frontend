import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <CustomNavbar transparent={true} />
        <section className="home">
          <div className="row h-100 justify-content-md align-items-center">
            <div className="home-container">
              <div style={{ width: '60%', margin: '20px' }}>
                <p className="text-white text-md">
                  You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.
                </p>
                <p className="text-white text-lg">-- Steve Jobs</p>
              </div>
              <div style={{ width: '40%' }} className="links">
                <div>
                  <Link to="#">Register</Link>
                </div>
                <div>
                  <Link to="#">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}