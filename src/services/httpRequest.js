import axios from 'axios'

class HttpRequest  {

  async get(url, options= {}) {
    return axios(url, options)
  }

  async post(url, data, options={}) {
    return axios(url,data,{
      ...options,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}

const httpRequest = new HttpRequest()

export default httpRequest