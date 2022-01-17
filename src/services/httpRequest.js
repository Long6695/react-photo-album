import axios from 'axios'

class HttpRequest  {

  async get(url, options= {}) {
    return axios(url, options)
  }

}

const httpRequest = new HttpRequest

export default httpRequest