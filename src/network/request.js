import axios from 'axios'

function request(config) {
  const instance = axios.create({
    baseURL: 'http://39.105.118.1:3000',
    timeout: 500
  })
  return instance(config)
}
function getText(id) {
  return request({
    url: '/getText',
    params:{
      id: id
    }
  })
  // return axios.get('http://39.105.118.1:3000/getText',{params:{
  //   id: id
  // }})
}
export {
  request,
  getText
}