import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {RegisterModel} from "../authentication/register.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(registerModel: RegisterModel) {
    this.http.post('http://localhost:8080/register', registerModel)
      .subscribe();
  }
}
