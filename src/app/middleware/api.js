import Axios from 'axios';
import Config from 'Config';
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
    return Axios.get(Api.getURL(Config.serverURL + resourceApi, templatedValues))
      .then(response => response.data)
      .catch(error => {
        throw (error);
      });
  }

  static post(resourceApi, data) {
    return Axios.post(Api.getURL(Config.serverURL + resourceApi), data)
      .then(response => response.data)
      .catch(error => {
        throw (error);
      });
  }

  static put(resourceApi, templatedValues, data) {
    return Axios.put(Api.getURL(Config.serverURL + resourceApi, templatedValues), data)
      .then(response => response.data)
      .catch(error => {
        throw (error);
      });
  }

  static delete(resourceApi, templatedValues) {
    return Axios.delete(Api.getURL(Config.serverURL + resourceApi, templatedValues))
      .then(response => response.data)
      .catch(error => {
        throw (error);
      });
  }
}

export default Api;
