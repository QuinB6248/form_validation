import React from 'react'
import {connect} from 'react-redux'


class Info extends React.Component {
  
  render() {
    return (
     <div className='infodisplay'>
        
        <div className='displayfield'>
          <div className='namefield'>
            {this.props.reducerReduxState.voorletters}
          </div>
          <div className='namefield'>
            {this.props.reducerReduxState.tussenvoegsel}
          </div>
          <div className='namefield'>
            {this.props.reducerReduxState.achternaam}
          </div>
        </div>

        <div className='displayfield'>
          <div className='namefield'>
            {this.props.reducerReduxState.straatnaam}
          </div>
          <div className='namefield'>
            {this.props.reducerReduxState.huisnummer}
          </div>
        </div>

        <div className='displayfield'>
          <div className='namefield'>
            {this.props.reducerReduxState.postcode}
          </div>
          <div className='namefield'>
            {this.props.reducerReduxState.stad}
          </div>
        </div>
        
        <div className='displayfield'>
          {this.props.reducerReduxState.email}
        </div>
      </div>
    )
   }
  }
  
  const mapStateToProps = (state) => {
  
    return {
      reducerReduxState: state.reducerReduxState
     
    }
  }
  
  
  export default connect(mapStateToProps)(Info)