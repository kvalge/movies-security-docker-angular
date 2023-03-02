import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {RegisterModel} from "../authentication/register.model";
import {LoginModel} from "../authentication/login/login.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(registerModel: RegisterModel) {
    this.http.post('http://localhost:8080/register', registerModel)
      .subscribe();
  }

  login(loginModel: LoginModel) {
    return this.http.post<LoginModel>('http://localhost:8080/login', loginModel)
      .subscribe();
  }
}
