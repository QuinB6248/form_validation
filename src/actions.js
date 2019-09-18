import request from 'superagent'
const baseUrl = 'http://localhost:4000'


// stores info in the redux state

export const INFORMATION = 'INFORMATION'
const informationDispatcher = info => ({
  type: INFORMATION,
  payload: info
})

export const information = (state) => (dispatch) => {
  dispatch(informationDispatcher(state))
}



// POST and GET Test Routes, works with JSON server (db.js)

export const POST_INFO = 'POST_INFO'
const postInfo = info => ({
  type: POST_INFO,
  payload: info
})

export const postinfo = (state) => (dispatch) => {
  request
    .post(`${baseUrl}/info`)
    .send(state)
    .then(response => dispatch(postInfo(response.body)))
    .catch(console.error)
}


export const GET_INFO = 'GET_INFO'
const getInfo = info => ({
  type: GET_INFO,
  payload: info
})

export const getinfo = (state) => (dispatch) => {
  console.log('REQ', state)
  request(`${baseUrl}/info`)
    .send(state)
    .then(response => dispatch(getInfo(response.body)))
    .catch(console.error)
}