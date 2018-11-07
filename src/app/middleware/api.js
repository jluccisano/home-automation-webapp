import Axios from 'axios';
import UriTemplate from 'uri-template.js';

class Api {
  static getURL(url, templateValues) {
    templateValues = templateValues === undefined ? {} : templateValues;
    url = UriTemplate.expand(url, templateValues);
    return url;
  }

  static addTokenToRequest(headers, token) {
    return {
      headers: Object.assign({
        Authorization: `Bearer ${token}`
      }, headers)
    };
  }

  static get(resourceApi, templatedValues) {
    return Axios.get(Api.getURL(process.env.SERVER_URL + resourceApi, templatedValues))
      .then(response => response.data)
      .catch(error => {
        throw (error);
      });
  }

  static post(resourceApi, templatedValues, data) {
    return Axios.post(Api.getURL(process.env.SERVER_URL + resourceApi, templatedValues), JSON.stringify(data), {headers:{'Content-Type': 'application/json'}})
      .then(response => response.data)
      .catch(error => {
        throw (error);
      });
  }

  static put(resourceApi, templatedValues, data) {
    return Axios.put(Api.getURL(process.env.SERVER_URL + resourceApi, templatedValues), data)
      .then(response => response.data)
      .catch(error => {
        throw (error);
      });
  }

  static delete(resourceApi, templatedValues) {
    return Axios.delete(Api.getURL(process.env.SERVER_URL + resourceApi, templatedValues))
      .then(response => response.data)
      .catch(error => {
        throw (error);
      });
  }
}

export default Api;
