import axios from 'axios'

axios.defaults.baseURL = 'http://39.105.118.1:3000';
//获取文章列表
const getTitle = ()=>{
  return axios({
    method: 'get',
    url: '/getTitle',
    responseType: 'json',
  })
}
//根据id获取文章内容
const getText = id=>{
  return axios({
    method: 'get',
    url: '/getText',
    responseType: 'json',
    params: {
      id: id
    }
  })
}

export {
  getTitle,
  getText
}