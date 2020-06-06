import React from 'react'
import CustomNavbar from '../components/CustomNavbar'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <CustomNavbar transparent={true} />
        <section className="home">
          <div className="row h-100 justify-content-md align-items-center">
            <div className="home-container">
              <div className="home-text-container">
                <p className="text-white text-lg bolder">
                  You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.
                </p>
                <p className="text-white text-xl bolder">- Steve Jobs</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}