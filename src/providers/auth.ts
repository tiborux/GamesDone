import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {ENV} from "../config/config.dev";

@Injectable()
export class AuthProviders {

  constructor(public http : Http) {
  }

  postData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let options = new RequestOptions({ headers: headers });
      let body = {
        username: credentials.username.toLowerCase(),
        password: credentials.password
      };

      this.http.post(ENV.API_ENDPOINT +'/'+ ENV.LOGIN, JSON.stringify(body), options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
