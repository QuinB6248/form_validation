import React from 'react'
import FormDetails from './FormDetails'
import {connect} from 'react-redux'
import * as request from 'superagent'
import { information, postinfo } from '../actions'

class FormContainer extends React.Component {
state = {
    voorletters: '',
    tussenvoegsel: '',
    achternaam: '',
    postcode: '',
    straatnaam: '',
    stad: '',
    huisnummer: '',
    email: ''
  }
 
onSubmit = (event) => {
 event.preventDefault()
 this.props.information(this.state)
  this.props.postinfo(this.state)
 this.props.history.push("/info");
}

onChange = (event) => {
  this.setState({
   [event.target.name]: event.target.value 
 })
}

onFocusOut = (event) => {
  request.get(`https://photon.komoot.de/api/?q=${event.target.value}}`)
  .then(res => {
    this.setState({
      straatnaam:res.body.features[0].properties.name,
      stad: res.body.features[0].properties.city
    })
  })
}

render() {
 return (
  <div>
    <div>
        <FormDetails onSubmit={this.onSubmit} onChange={this.onChange} onFocusOut={this.onFocusOut} values={this.state}/>
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


export default connect(mapStateToProps, {information, postinfo})(FormContainer)
