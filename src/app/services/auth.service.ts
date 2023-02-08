import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {UserModel} from "../authentication/user.model";

@Injectable({providedIn: 'root'})
export class AuthService{

  constructor(private http: HttpClient) {
  }

  register(userModel: UserModel) {
    userModel.roleName = 'lugeja';
    this.http.post('http://localhost:8080/user/new', userModel)
      .subscribe();
  }
}
