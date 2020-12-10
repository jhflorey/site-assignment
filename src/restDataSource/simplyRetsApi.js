const { RESTDataSource } = require('apollo-datasource-rest');

class SimplyRestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.simplyrets.com/';
  }
  // attach token to header before request
  willSendRequest(request) {
    const auth = "simplyrets:simplyrets";
    // Basic authentication
    let base64data = Buffer.from(auth).toString('base64')
    request.headers.set('Authorization', `Basic ${base64data}`);
  }
  // request to api
  async getProperties(q) {    
    const data = await this.get(`properties?q=${q}&?count=true`);
    return data;
  }
}
module.exports = SimplyRestAPI;