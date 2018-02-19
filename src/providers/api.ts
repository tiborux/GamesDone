  import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import {Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {ENV} from "../config/config.dev";

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class ApiProvider {
  url: string = ENV.API_ENDPOINT;

  constructor(public http: Http) {
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    console.log(this.url + '/' + endpoint);
    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + '/' + endpoint, options);
  }

  post(endpoint: string, params: any, options?: RequestOptions) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    if (!options){
      options = new RequestOptions({ headers: headers });
    }2
    return this.http.post(this.url + '/' + endpoint, params, options);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + '/' + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }
}
