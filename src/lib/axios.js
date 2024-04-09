import axios from "axios";

const env = import.meta;

const api = env.VITE_API;

export default class HttpReq {
  constructor() {
    this.http = axios.create({
      baseURL: api,
    });

    this.http.defaults.withCredentials = true;
    this.http.defaults.withXSRFToken = true;
    this.http.interceptors.request.use(
      function (config) {
        // console.log('Axios configuration information', config)
        return config;
      },
      function (error) {
        return error.response;
      }
    );

    // This intercepts response before it is returned
    // attached required parameters to the request
    this.http.interceptors.response.use(
      function (response) {
        // console.log("Response status", response);
        // if (response.status === 204)
        //   response.data = { message: "Logout successful" };
        return response.data;
      },
      function (error) {
        // console.log("axios error info", error.response)
        throw new Error(error.response.data.message);
      }
    );
  }

  post = async (url, payload, options = null) => {
    try {
      return await this.http.post(url, payload, options);
    } catch({message}) {
      throw new Error(message)
    }
    
  };

  patch = async (url, payload, options = null) => {
    try {
      return await this.http.patch(url, payload, options);
    } catch({message}) {
      throw new Error(message)
    }
  };

  get = async (url, options = null) => {
    try {
      return await this.http.get(url, options);
    } catch({message}) {
      throw new Error(message)
    }
  };

  delete = async (url, options = null) => {
    try {
      return await this.http.delete(url, options);
    } catch({message}) {
      throw new Error(message)
    }
  };
}
