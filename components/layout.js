import React from 'react'
import AppBarMain from './appbarmain'
import Header from './header'

export default class extends React.Component {

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <div>
        <Header />
        <AppBarMain />
        <div className="container">
          {this.props.children}
        </div>
      </div>  
    )
  }
}
